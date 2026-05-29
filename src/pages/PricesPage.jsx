import Loader from "../components/common/Loader";

import ErrorMessage from "../components/common/ErrorMessage";

import EmptyState from "../components/common/EmptyState";

import PriceChart from "../components/charts/PriceChart";

import { usePrices } from "../hooks/usePrices";

function PricesPage() {

  const {
    prices,
    averagePrice,
    loading,
    error,
    selectedDate,
    setSelectedDate,
  } = usePrices();

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Panel de precios
      </h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">

        <label className="block mb-2 font-semibold">
          Seleccionar fecha
        </label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) =>
            setSelectedDate(e.target.value)
          }
          className="border rounded-lg px-4 py-2"
        />

      </div>

      {loading && <Loader />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && !prices.length && (
        <EmptyState />
      )}

      {!loading && !error && prices.length > 0 && (
        <>
          <div className="bg-white rounded-lg shadow p-6 mb-6">

            <h2 className="text-xl font-semibold mb-2">
              Precio promedio diario
            </h2>

            <p className="text-3xl text-blue-600 font-bold">
              ${averagePrice}
            </p>

          </div>

          <div className="bg-white rounded-lg shadow p-6">

            <PriceChart data={prices} />

          </div>
        </>
      )}

    </div>
  );
}

export default PricesPage;