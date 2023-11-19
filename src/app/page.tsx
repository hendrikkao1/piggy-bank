export default function RootPage() {
  return (
    <article className="px-6 py-20 text-md max-w-3xl">
      <h1 className="font-display text-4xl font-medium tracking-tight text-zinc-900">
        Welcome to Piggy bank!
      </h1>
      <p className="mt-2 text-lg tracking-tight text-zinc-600">
        An app for tracking your daily expenses. Track your daily expenses and
        make smarter money decisions today!
      </p>
      <div className="text-zinc-900 mt-20 text-md">
        <h2 className="font-semibold text-lg text-zinc-900">Requirements</h2>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - You can use any starter project, or boilerplate for react or
            next.js, e.g.
          </blockquote>
          <p className="mt-2">
            I chose to go with next.js. As it feels like the de facto option for
            now. It comes with &quot;batteries&quot; included, has some well
            defined ways of doing things, great docs, examples and community.
            And I won&apos;t turn down a possibility to work with next.js :)
          </p>
        </section>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - Implement a state management concept, using pure react or
            libraries as redux-rtk, zustand etc.
          </blockquote>
          <p className="mt-2">
            I went with zustand for client side state. On my day job I usually
            work with React context and reducers, in my experience they
            don&apos;t scale that well in large projects. They will be misused
            and too easily become a mess of dependencies and as they slowly
            creep higher in the app tree causing larger and larger rerenders.
          </p>
          <p className="mt-2">
            The current state is more &quot;backend state&quot; I feel a better
            option would have been something like a React query or to use server
            actions.
          </p>
        </section>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - Use http requests to consume the REST API from the client
          </blockquote>
          <p className="mt-2">
            Used native fetch for requests and zod for validating the response
            schema. Alternative would be Axios, where interceptors and error
            handling are easier to setup.
          </p>
        </section>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - Create a simple mock server for loading and modifying the data,
            e.g. json-server or next.js api routes
          </blockquote>
          <p className="mt-2">
            Used Next js API routes as they come out of the box.
          </p>
        </section>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - Consider client-side validation and error handling
          </blockquote>
          <p className="mt-2">
            I consider forms hard. Once you start introducing logic and
            variation in them things can easily get out of hand. My go to tool
            for forms is React hooks form. It covers major use cases well and is
            flexible. I find some of the error typings bit strange but
            that&apos;s life :)
          </p>
          <p className="mt-2">
            Form validation is again built on a zod schema.
          </p>
          <p className="mt-2">
            For error handling I went with the classic &quot;Something went
            wrong&quot; error boundary at the root. Possibly could have put more
            effort into it!
          </p>
        </section>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - UI styling will be appreciated but is not required, feel free to
            use any 3rd party library you prefer
          </blockquote>
          <p className="mt-2">
            I&apos;m usually torn between styled components and tailwind, CSS
            modules. I went with tailwind. while being somewhat controversial I
            feel most of us don&apos;t enjoy writing and managing CSS that much
            nor is it easy. Once you get the hang of tailwind naming schema and
            know CSS it becomes pretty easy to get something half decent on the
            screen.
          </p>
        </section>
        <section className="mt-8">
          <blockquote className="p-4 mb-2 border-l-4 border-zinc-900/20 bg-zinc-900/10 italic font-semibold leading-relaxed">
            - Please think of it from an Enterprise Solutions perspective and
            treat it as a &quot;big&quot; project
          </blockquote>
          <p className="mt-2">
            In hindsight I could have specified what does this mean to you as
            this ended up being a power struggle between enterprise, time and
            keeping it simple, for me. There are many factors like planning,
            scalability, security, reliability, compliance, flexibility. I
            decided to focus on topics I personally feel quite critical when
            managing a large and long living application.
          </p>
          <p className="mt-2">
            It should have well defined ways of doing things. As there are more
            and more people working on it, deviations are bound to come up and
            it will be hard to reason and know everything. As much as possible
            follow the existing pattern. Keeping a clean house etc. I hope you
            see what I mean.
          </p>
          <p className="mt-2">
            At the same time we need flexibility to address the ever changing
            business needs as we grow. We can address some of this by
            interacting with facades, proxies or abstractions. This allows us to
            easily switch out existing implementations or libraries when needed.
          </p>
          <p className="mt-2">
            Tooling, testing, automation. All known topics. Good tools and
            developer experience keep us productive. Good testing setup will
            allow us to sleep at night. And automation gives us time to focus on
            topics that matter to the organization.
          </p>
        </section>
      </div>
    </article>
  );
}
