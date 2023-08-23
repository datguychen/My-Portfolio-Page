export default function BarGraph({ name, percent }) {
  return (
    <div className="flex flex-col" data-testid="SkillsInfo">
      <div className="flex flex-row justify-between w-3/4 px-6 text-lg " data-testid="SkillsName">
        <h2>{name}</h2>
        <h3>{percent}%</h3>
      </div>
      <div
        class="w-3/4 bg-neutral-200 h-2.5
     rounded-3xl"
      >
        <div
          class="bg-blue-600 h-2.5 text-center  font-medium leading-none text-black rounded-3xl"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
