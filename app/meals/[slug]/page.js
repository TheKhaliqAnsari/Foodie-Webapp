export default function MealsPage({params}) {
    const {slug} = params;
  return (
    <div>
      <h1>Meals - {slug}</h1>
    </div>
  );
}

// This function generates the static parameters for the dynamic route
export async function generateStaticParams() {
  // Replace this with your actual data fetching logic
  const slugs = ['burger', 'pizza', 'curry', 'dumplings', 'macncheese'];

  return slugs.map((slug) => ({
    slug,
  }));
}