import Loader from "../components/common/Loader";

import ErrorMessage from "../components/common/ErrorMessage";

import EmptyState from "../components/common/EmptyState";

import GenerationChart from "../components/charts/GenerationChart";

import { useGeneration } from "../hooks/useGeneration";

function GenerationPage() {

  const {
    generationData,
    loading,
    error,
  } = useGeneration();

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Panel de generación
      </h1>

      {loading && <Loader />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {!loading &&
        !error &&
        !generationData.length && (
          <EmptyState />
      )}

      {!loading &&
        !error &&
        generationData.length > 0 && (

        <div className="bg-white rounded-lg shadow p-6">

          <h2 className="text-xl font-semibold mb-6">
            Top 10 plantas despachadas
          </h2>

          <GenerationChart
            data={generationData}
          />

        </div>
      )}

    </div>
  );
}

export default GenerationPage;