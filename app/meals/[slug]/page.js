export default function MealsPage({params}) {
    const {slug} = params;
  return (
    <div>
      <h1>Meals - {slug}</h1>
    </div>
  );
}