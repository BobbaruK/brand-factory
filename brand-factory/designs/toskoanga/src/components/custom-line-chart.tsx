import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useIsMounted, useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";

const chartData = [
  // { month: "Jan '24", price: 42_580.5 },
  // { month: "Feb '24", price: 61_169.3 },
  // { month: "Mar '24", price: 71_332.0 },
  // { month: "Apr '24", price: 60_666.6 },
  // { month: "May '24", price: 67_530.1 },
  { month: "Jun '24", price: 62_754.3 },
  { month: "Jul '24", price: 64_626.0 },
  { month: "Aug '24", price: 58_978.6 },
  { month: "Sep '24", price: 63_339.2 },
  { month: "Oct '24", price: 70_281.8 },
  { month: "Nov '24", price: 96_405.7 },
  { month: "Dec '24", price: 93_557.2 },
  { month: "Jan '25", price: 94_536.1 },
  { month: "Feb '25", price: 84_381.2 },
  { month: "Mar '25", price: 82_548.8 },
  { month: "Apr '25", price: 94_184.4 },
  { month: "May '25", price: 103_699.6 },
];

interface Props {
  title: string;
}

export function CustomLineChart({ title }: Props) {
  const matchesLG = useMediaQuery("(min-width: 1081px)");
  const showNumbers = useMediaQuery("(min-width: 636px)");

  const [compIsLoaded, setCompIsLoaded] = useState(false);

  const chartConfig = {
    price: {
      label: title,
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    setCompIsLoaded(true);
    return () => {};
  }, [compIsLoaded]);

  if (!compIsLoaded) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading3 font-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="max-lg:!aspect-auto max-lg:h-[450px]"
        >
          {matchesLG ? (
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={true}
                axisLine={true}
                tickMargin={8}
                tickFormatter={(value) => value}
                style={{
                  fontWeight: "bold",
                }}
              />
              <YAxis
                tickLine={true}
                axisLine={true}
                tickMargin={8}
                style={{
                  fontWeight: "bold",
                }}
              />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="price"
                type="natural"
                stroke="var(--color-price)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          ) : (
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: -20,
              }}
            >
              <XAxis
                type="number"
                dataKey="price"
                tickLine={true}
                axisLine={true}
              />
              <YAxis
                tickLine={true}
                axisLine={true}
                dataKey="month"
                type="category"
                tickMargin={10}
                tickFormatter={(value) => value}
                hide
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {/* <Bar dataKey="price" fill="var(--color-price)" radius={0} /> */}
              <Bar
                dataKey="price"
                layout="horizontal"
                fill="var(--color-price)"
                radius={0}
              >
                <LabelList
                  dataKey="month"
                  position="insideLeft"
                  offset={25}
                  className="fill-[var(--color-white)]"
                  fontSize={12}
                />
                {showNumbers && (
                  <LabelList
                    dataKey="price"
                    position="right"
                    offset={8}
                    className="fill-[var(--foreground)]"
                    fontSize={12}
                  />
                )}
              </Bar>
            </BarChart>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
