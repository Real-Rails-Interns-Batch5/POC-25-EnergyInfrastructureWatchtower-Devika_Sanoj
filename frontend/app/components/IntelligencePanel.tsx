export default function IntelligencePanel({ data }: any) {
  return (
    <div className="bg-[#0B1117] border border-[#1F2937] p-4 rounded-lg">
      <h2 className="text-[#38BDF8] font-semibold">
        Intelligence
      </h2>

      <div className="mt-2 text-sm">
        <p>{data?.headline_metric?.label}</p>
        <p className="text-xl text-white">
          {data?.headline_metric?.value}
        </p>
      </div>

      <div className="mt-2 text-xs text-gray-400">
        {data?.regional_delta?.description}
      </div>
    </div>
  );
}