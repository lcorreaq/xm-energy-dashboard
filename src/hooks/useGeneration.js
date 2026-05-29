import { useEffect, useState } from "react";

import { fetchHourlyData } from "../services/xmApi";

export const useGeneration = () => {

  const [generationData, setGenerationData] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    loadGeneration();
  }, []);

  const loadGeneration = async () => {

    try {

      setLoading(true);

      setError("");

      const body = {
        MetricId: "Gene",
        StartDate: "2024-05-01",
        EndDate: "2024-05-02",
        Entity: "Recurso",
      };

      const response =
        await fetchHourlyData(body);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(response);

      const groupedData = {};

        response.Items.forEach((item) => {

        const entity =
            item.HourlyEntities[0];

        if (!entity) return;

        const name = entity.Values.code;;

        const values = entity.Values;

        let total = 0;

        Object.entries(values)

            .filter(([key]) =>
            key.startsWith("Hour")
            )

            .forEach(([, value]) => {
            total += Number(value);
            });

        groupedData[name] = total;
});

      const top10 = Object.entries(groupedData)

        .map(([name, total]) => ({
          name,
          total: Number(total.toFixed(2)),
        }))

        .sort((a, b) => b.total - a.total)

        .slice(0, 10);
        console.log("2222222222222222222222222222222222");
        console.log(top10);
      setGenerationData(top10);

    } catch (err) {

      console.error(err);

      setError(
        "No fue posible cargar la generación"
      );

    } finally {

      setLoading(false);

    }
  };

  return {
    generationData,
    loading,
    error,
  };
};