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
          From the family who loves your food the most
        </p>
      </header>

      {/* ── Chapters ──────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-4">

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

          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ravioli.jpg"
              alt="Great Grandma's homemade ravioli"
              className="float-right w-96 h-auto ml-8 mb-4 rounded-sm"
              style={{
                border: "1px solid #c9aa87",
                boxShadow: "3px 3px 14px rgba(61, 43, 31, 0.10)",
              }}
            />
            <div className="space-y-5">
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Nobody really knows where it came from. Maybe it was Great Grandma&apos;s
                homemade ravioli. Maybe it was Diana's baking. Maybe it was simply in her genes, 
                something passed down quietly through generations of people who understood that
                feeding others is its own kind of love.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Or maybe it was that summer job in the ice cream shop she did as a kid.
                Maybe that long summer of scooping cone after cone, elbow-deep in a freezer until
                her skin hurt and her muscles ached, lit something in her that no amount of freezer
                burn could put out. A love for food.  A food affair. But however it started, culinary 
                discovery became one of the great driving loves of her life. And lucky for us, 
                she never kept it to herself.
              </p>
              <p className="text-base italic leading-8" style={{ color: "#7a6552" }}>
                &ldquo;Some people are born knowing that food is more than fuel. She was one of them.&rdquo;
              </p>
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
              Birthdays!
            </h2>
          </div>

          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/birthday_cake.gif"
              alt="A birthday cake"
              className="float-left w-56 h-auto mr-8 mb-4 rounded-sm"
            />
            <div className="space-y-5">
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Every kid has a birthday cake. Not every kid is lucky enough to have a mom
                who makes a turtle cheesecake or Boston cream pie for their birthday.
                Not a store-bought sheet cake with plastic roses, but something made from scratch,
                made with intention. She understood, that a birthday dessert wasn&apos;t just dessert.
                It was a statement. It was her way of saying: <em>you are worth the effort.</em>
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/turtle_cheesecake.gif"
                alt="A turtle cheesecake with caramel and pecans"
                className="float-right w-56 h-auto ml-8 mb-4 rounded-sm"
              />
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                After that first Boston cream pie, there was really only one answer to
                the question of what I wanted for my birthday. Every year, without exception.
                Friends could have their sheet cakes with the frosting rosettes.  Thanks to Mom,
                we had discovered birthday delicacies that were so much better.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Nobody announced it as a tradition. She just kept doing it — every year,
                whatever you asked for, she made it. Not something from a box, not a
                last-minute run to the supermarket, but the real thing, from scratch.
              </p>
              <p className="text-base leading-8" style={{ color: "#7a6552" }}>
                🎂 <em>&ldquo;We got something made from scratch, made with love.&rdquo;</em> 🎂
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
              Tomato Soup & Noodles
            </h2>
          </div>

          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tomato_soup.gif"
              alt="A steaming bowl of Mom's tomato soup and noodles"
              className="float-left w-56 h-auto mr-8 mb-4"
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
                Summer Barbeque & Garden Sweet Corn
              </h3>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Mom&apos;s dedication to great food in the kitchen was contagious. It made
                you want to bring her equally great ingredients to work with. So when I
                started growing a garden, one of the first things on the list was sweet corn —
                paired perfectly with her hamburgers fresh off the grill, it was something
                worthy of her summer barbecues.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                Whatever corn we didn&apos;t eat fresh, Mom would make into bags of freezer corn
                to last through the year — a welcome reminder of her summer dinner tables,
                and the way Mom's love for cooking inspired us to discover a love
                for food in our own unique ways.
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
                But now I love them too. I make sure to make one whenever I have a ripe garden
                tomato, and I think of Mom every time. It took me years to come around to what
                she had always known — that the simplest things, made with the best ingredients, are often the best.
              </p>
            </div>
          </div>

          {/* Strawberry Pie */}
          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/strawberry_pie.gif"
              alt="A fresh strawberry pie with a scoop of ice cream"
              className="float-right w-80 h-auto ml-8 mb-4 rounded-sm"
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
                destination for the berries we didn't eat or make jam with: strawberry pie! A glossy, jewel-bright
                strawberry pie with a buttery crust, served still slightly warm with a
                generous scoop of vanilla ice cream melting alongside it.
              </p>
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                There was no better summer treat. It was the taste of an expert baker and
                a summer strawberry patch distilled into one perfect slice.
              </p>
              <p className="text-base leading-8" style={{ color: "#7a6552" }}>
                🌽 🍅 🍓 <em>&ldquo;The best things in summer come from the garden.&rdquo;</em> 🍓 🍅 🌽
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Chapter V */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter V
            </p>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
            >
              The Gadget Drawer
            </h2>
          </div>

          <div className="clearfix">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gadget_drawer.jpg"
              alt="Mom's kitchen gadget drawer"
              className="float-right w-96 h-auto ml-8 mb-4 rounded-sm"
              style={{
                border: "1px solid #c9aa87",
                boxShadow: "3px 3px 14px rgba(61, 43, 31, 0.10)",
              }}
            />
            <div className="space-y-5">
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                At some point, every serious cook develops a relationship with their tools.
                For Mom, this meant a kitchen full of gadgets — some essential, some
                mysterious, and a remarkable number that none of us could identify on sight.
                There was always a drawer, or a cabinet, or a hooks-on-the-wall situation
                that seemed to multiply when you turned your back.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                We learned early that if something needed doing in the kitchen and you
                didn&apos;t know how to do it, Mom probably had a gadget for it. A
                do-hickey for this, a whatsit for that. And if she didn&apos;t have one yet,
                she would. We stopped being surprised. We started being impressed. The basement
                became like the Bat Cave, but if Batman was an Italian mom who loved food.
              </p>
              <img
                src="/gadget_cave.jpg"
                alt="Mom's gadget cave"
                className="float-left w-128 h-auto mr-8 mb-4 rounded-sm"
                style={{
                  border: "1px solid #c9aa87",
                  boxShadow: "3px 3px 14px rgba(61, 43, 31, 0.10)",
                }}
              />
              <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
                It became a family joke, the kind that's funniest because it&apos;s true.
                Someone would mention a kitchen task needing to be done, and there'd be Mom,
                with one of her new gizmos that does it for you.  Her kitchen was
                a testament to discovery — to a cook who was always
                looking for a better way, a sharper edge, a tool that made something
                wonderful just a little more possible.
              </p>
              <p className="text-base leading-8" style={{ color: "#7a6552" }}>
                🍴 <em>&ldquo;Hey, we need this gadget for the kitchen.&rdquo; &nbsp;/&nbsp; &ldquo;We&apos;re seeing Mom next week — she probably has six.&rdquo;</em> 🍴
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Chapter VI */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter VI
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
                impossibly soft, pulled from the oven just before dinner. And some of our
                favorite dessert discoveries at Mom's holiday meals? The chocolate ganache
                and key lime pie!
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/key_lime_pie.gif"
                alt="Key lime pie"
                className="float-left w-48 h-auto mr-8 mb-4 rounded-sm"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/tortellini.gif"
                alt="Holiday tortellini"
                className="float-right w-48 h-auto ml-8 mb-4 rounded-sm"
              />
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

        <SectionDivider />

        {/* Chapter VII */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c2956b" }}>
              Chapter VII
            </p>
            <h2
              className="text-3xl font-bold mt-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#3d2b1f" }}
            >
              A Chef at Heart
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
              There is a word for someone who transforms simple ingredients into something
              that stays with you for a lifetime. Someone who knows instinctively when to
              add a little more, when to let something rest, when to trust the recipe and
              when to ignore it entirely. That word is <em>chef</em> — and it has always
              applied to Mom, whether she ever claimed the title or not.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/heart.gif"
              alt="A heart"
              className="float-left w-86 h-auto mr-8 mb-4 rounded-sm"
            />
            <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
              She chose a different path, of course — a desk, a career, a life built in
              ways that had nothing to do with a kitchen. And she was wonderful at that too.
              But food was never far away. It was always there: in the meals she planned,
              in the dishes she perfected, in the way she talked about flavor the way other
              people talk about art. Her love for food was never a side note. It was
              woven into the fabric of our family.
            </p>
            <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
              We may not have known it at the time — children rarely do — but those meals
              shaped us into who we are today. The things we reach for in a grocery store, the comfort foods
              we make when we are tired or sad or far from home, the standard we hold
              every bowl of soup and holiday dinner up to: all of it traces back to her table. Her culinary
              discoveries became our culinary inheritance.
            </p>
            <p className="text-base leading-8" style={{ color: "#5c4a3a" }}>
              So here is what we want her to know: we were paying attention, we cared, and we
              felt loved with every bite, even when it did not seem like it. Every meal was a gift, and we are
              grateful — not just for the food, but for what it taught us about care, and
              patience, and the quiet way love can show up on a plate.
            </p>
            <p className="text-base leading-8 text-center mt-8" style={{ color: "#7a6552" }}>
              👩‍🍳 <em>&ldquo;The best chefs are the ones who cook for love, not for recognition.&rdquo;</em> 👩‍🍳
            </p>
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
