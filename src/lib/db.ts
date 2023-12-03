import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export interface IDBExpense {
  amount: string;
  currency: string;
  date: string;
  recipient: string;
  type: string;
  uuid: string;
}

const getPaginatedExpenses = async (
  skip = 0,
  limit = Number.MAX_SAFE_INTEGER,
): Promise<{
  data: IDBExpense[] | null;
  error: PostgrestError | null;
}> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("expenses").select("*");

  return {
    data: data as unknown as IDBExpense[] | null,
    error,
  };
};

const getExpenseById = async (
  uuid: string,
): Promise<{
  data: IDBExpense | null;
  error: PostgrestError | null;
}> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("uuid", uuid)
    .single<IDBExpense>();

  return {
    data,
    error,
  };
};

const addExpense = async (
  expense: IDBExpense,
): Promise<{
  data: IDBExpense | null;
  error: PostgrestError | null;
}> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { amount, currency, date, recipient, type } = expense;
  const { data, error } = await supabase
    .from("expenses")
    .insert({
      amount,
      currency,
      date,
      recipient,
      type,
    })
    .select()
    .single<IDBExpense>();

  return {
    data,
    error,
  };
};

const updateExpense = async (
  expense: IDBExpense,
): Promise<{
  data: IDBExpense | null;
  error: PostgrestError | null;
}> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { amount, currency, date, recipient, type, uuid } = expense;
  const { data, error } = await supabase
    .from("expenses")
    .update({
      recipient,
      date,
      amount,
      currency,
      type,
    })
    .eq("uuid", uuid)
    .select()
    .single<IDBExpense>();

  return {
    data,
    error,
  };
};

const deleteExpenseById = async (
  uuid: string,
): Promise<{
  data: null;
  error: PostgrestError | null;
}> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("expenses")
    .delete()
    .eq("uuid", uuid);

  return {
    data,
    error,
  };
};

const db = {
  addExpense,
  deleteExpenseById,
  getExpenseById,
  getPaginatedExpenses,
  updateExpense,
};

export default db;
