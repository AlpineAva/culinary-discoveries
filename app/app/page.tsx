function PhotoPlaceholder({
  label,
  aspectRatio = "4/3",
  className = "",
}: {
  label: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-sm overflow-hidden ${className}`}
      style={{
        aspectRatio,
        backgroundColor: "#ecdfc8",
        border: "1px solid #c9aa87",
        boxShadow: "3px 3px 14px rgba(61, 43, 31, 0.10)",
      }}
    >
      <div
        className="absolute inset-3 pointer-events-none"
        style={{ border: "1px dashed #c9aa87" }}
      />
      <div className="relative text-center px-6">
        <div className="text-xl mb-2" style={{ color: "#b89a72" }}>
          ✦
        </div>
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "#9a7a56", fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-5 py-2">
      <div
        className="h-px flex-1"
        style={{ maxWidth: "6rem", backgroundColor: "#c2956b", opacity: 0.5 }}
      />
      <span style={{ color: "#c2956b", fontSize: "0.65rem", letterSpacing: "0.5rem" }}>
        ✦ ❧ ✦
      </span>
      <div
        className="h-px flex-1"
        style={{ maxWidth: "6rem", backgroundColor: "#c2956b", opacity: 0.5 }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#fdf6e3", fontFamily: "var(--font-lora), Georgia, serif" }}
    >
      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="text-center py-24 px-8 max-w-2xl mx-auto">
        <p
          className="text-sm tracking-[0.2em] uppercase mb-8"
          style={{ color: "#c2956b" }}
        >
          A Mother&apos;s Day Celebration
        </p>
        <h1
          className="font-bold leading-tight mb-8"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "#3d2b1f",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Mom&apos;s
          <br />
          <em>Culinary</em>
          <br />
          Discoveries
        </h1>
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="h-px flex-1" style={{ backgroundColor: "#c2956b" }} />
          <span style={{ color: "#c2956b", fontSize: "1.25rem" }}>❧</span>
          <div className="h-px flex-1" style={{ backgroundColor: "#c2956b" }} />
        </div>
        <p className="text-lg italic leading-9" style={{ color: "#7a6552" }}>
          A storybook of culinary discoveries, favorite meals,
          <br />
          and the flavors of home.
        </p>
        <p
          className="text-sm tracking-widest uppercase mt-6"
          style={{ color: "#c2956b" }}
        >
          From the three kids who loved your food the most
        </p>
      </header>

      {/* ── Chapters ──────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 pb-32 space-y-4">

        {/* Chapter I */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter I
            </p>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
            >
              Where It All Began
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                TODO
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                 TODO
              </p>
              <p className="text-base italic leading-8" style={{ color: "#7a6552" }}>
                &ldquo;TODO&rdquo;
              </p>
            </div>
            <div className="space-y-4">
              <PhotoPlaceholder label="Photo: The Garden" aspectRatio="4/3" />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Chapter II */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter II
            </p>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
            >
              Tomato Soup & Noodles
            </h2>
          </div>

          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tomato_soup.gif"
              alt="A steaming bowl of Mom's tomato soup and noodles"
              className="float-left w-64 h-auto mr-8 mb-4"
            />
            <div className="space-y-5">
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Of all the culinary discoveries Mom introduced me to, this one may be
                the most beloved. Tomato soup and noodles — simple, warming, impossibly
                comforting — became one of my absolute favorite meals from the very first bowl.
                Because a culinary discovery need not be fancy
                to be meaningful. It just has to be delicious and made with love.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                There was never a bad day at school that a steaming bowl of Mom&apos;s "TMS"
                couldn&apos;t help. Something about the tangy, velvety broth and the chewy
                delicious noodles made everything problem I had feel smaller and more manageable.
                Even better when it was paired with a perfectly toasted grilled cheese sandwich!
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                During my most difficult times in College, this was the dish I would make for myself.
                It brought me moments of calm and a taste of home on the days I needed it most.
              </p>
              <p className="text-base leading-8" style={{ color: "#7a6552" }}>
                ❤️ <em>&ldquo;No bad day was ever so bad that a bowl of tomato soup & noodles couldn&apos;t help.&rdquo;</em> ❤️
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Chapter III */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter III
            </p>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
            >
              Discoveries from the Garden
            </h2>
          </div>

          {/* Ambrosia Corn */}
          <div className="clearfix mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/corn.gif"
              alt="Ambrosia sweet corn"
              className="float-right w-48 h-auto ml-8 mb-4"
            />
            <div className="space-y-4">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
              >
                Ambrosia Corn
              </h3>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                When I started growing food for the family, nothing prepared me for the
                moment I first tasted Ambrosia sweet corn fresh from the garden. The name
                turned out to be no exaggeration — it genuinely tasted like the food of the
                gods. Impossibly sweet, milky, and tender in a way that grocery store corn
                never comes close to.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Mom would stand at the stove boiling the ears minutes after I&apos;d picked
                them, insisting that every minute off the stalk mattered. She was right.
              </p>
            </div>
          </div>

          {/* Brandywine Tomato Sandwiches */}
          <div className="clearfix mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tomato_sandwich.gif"
              alt="Mom's Brandywine Tomato Sandwich"
              className="float-left w-48 h-auto mr-8 mb-4"
            />
            <div className="space-y-4">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
              >
                Mom's Tomato Sandwich
              </h3>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                I grew many kinds of tomatoes — big, gnarly, imperfect-looking
                things. But the most delicious ones, especially the Brandywine tomatoes, were reserved
                for Mom's tomato sandwiches. Just toasted white bread, some salt and butter, 
                and a generous portion of perfectly ripe tomato slices. I didn&apos;t 
                understand it at the time.  A tomato sandwich?  Yuck!
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                But now I love them too.  I make sure to make one whenever I have a ripe garden
                tomato, and I think of Mom every time. It took me years to discover this delicious
                treat that she already knew.
              </p>
            </div>
          </div>

          {/* Strawberry Pie */}
          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/strawberry_pie.gif"
              alt="A fresh strawberry pie with a scoop of ice cream"
              className="float-right w-56 h-auto ml-8 mb-4 rounded-sm"
              style={{
                border: "1px solid #c9aa87",
                boxShadow: "3px 3px 14px rgba(61, 43, 31, 0.10)",
              }}
            />
            <div className="space-y-4">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
              >
                Strawberry Pie
              </h3>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Come summer, when the strawberry patch finally came in, there was only one
                destination for the best of the harvest: the pie. A glossy, jewel-bright
                strawberry pie with a buttery crust, served still slightly warm with a
                generous scoop of vanilla ice cream melting alongside it.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                There was no better summer treat. Full stop. It was the taste of the whole
                season distilled into one perfect slice — the garden, the sunshine, and the
                satisfaction of having grown it ourselves.
              </p>
              <p className="text-base leading-8" style={{ color: "#7a6552" }}>
                🌽 🍅 🍓 <em>&ldquo;The best things in summer come from the garden.&rdquo;</em> 🍓 🍅 🌽
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Chapter IV */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter IV
            </p>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
            >
              Thanksgiving & Christmas
            </h2>
          </div>

          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/christmas_dinner.jpg"
              alt="The holiday dinner table"
              className="float-right w-128 h-auto ml-8 mb-4 rounded-sm"
              style={{
                border: "1px solid #c9aa87",
                boxShadow: "3px 3px 14px rgba(61, 43, 31, 0.10)",
              }}
            />
            <div className="space-y-5">
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Holiday meals in Mom&apos;s house were serious business. Every surface
                in the house seemed to transform — the kitchen becoming a workshop that
                somehow embodied both order and chaos at once. Timers going, pots bubbling,
                trays sliding in and out of the oven, and yet everything arrived at the table
                exactly as it should, right on time.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                The centerpiece was often a Chateaubriand — a roast that commanded respect
                from everyone in the room. Alongside it came fresh-baked rolls, golden and
                impossibly soft, pulled from the oven just before dinner. And my favorite dessert 
                I discovered at Mom's holiday meals? The chocolate ganache!
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                And always, without fail, the tortellini. Never out of place, always
                welcome — because no Italian holiday meal is truly complete without pasta.
                It was the thread that tied every celebration together, the taste that
                said, unmistakably: <em>this is home, and this is family.</em>
              </p>
              <p className="text-base leading-8" style={{ color: "#7a6552" }}>
                🦃 🎄 <em>&ldquo;A holiday meal is not a meal. It is an event — an expression of love.&rdquo;</em> 🎄 🦃
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer
        className="text-center py-20 px-8"
        style={{ borderTop: "1px solid #c9aa87", backgroundColor: "#f5ead0" }}
      >
        <div className="max-w-md mx-auto space-y-4">
          <p
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
          >
            Happy Mother&apos;s Day
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16" style={{ backgroundColor: "#c2956b" }} />
            <span style={{ color: "#c2956b" }}>❧</span>
            <div className="h-px w-16" style={{ backgroundColor: "#c2956b" }} />
          </div>
          <p className="text-base italic leading-8" style={{ color: "#7a6552" }}>
            With all the love in the world.
            <br />
            For all the meals that meant everything.
            <br />
            And the culinary discoveries we&apos;ll cherish for a lifetime.
          </p>
        </div>
      </footer>
    </div>
  );
}
