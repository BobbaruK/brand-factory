import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
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
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import type { ComponentProps } from "../../../../globals/types/component-props";

const chartData = [
  { month: "09 '24", price: 4_356.77 },
  { month: "10 '24", price: 4_477.27 },
  { month: "11 '24", price: 4_621.37 },
  { month: "12 '24", price: 4_853.64 },
  { month: "01' 25", price: 5_153.33 },
  { month: "02 '25", price: 5_182.76 },
  { month: "03 '25", price: 5_327.6 },
  { month: "04 '25", price: 5_112.24 },
  { month: "05 '25", price: 5_272.8 },
  { month: "06 '25", price: 5_484.72 },
  { month: "07 '25", price: 5_692.5 },
  { month: "08 '25", price: 6_111.97 },
];

interface Props {
  componentProps: ComponentProps;
  title: string;
}

export function CustomLineChart({ title, componentProps }: Props) {
  const matchesLG = useMediaQuery("(min-width: 1024px)");
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
      <CardContent dir="ltr">
        <ChartContainer
          config={chartConfig}
          className="max-lg:aspect-auto! max-lg:h-[450px] lg:h-[300px] lg:w-full"
        >
          {matchesLG ? (
            <AreaChart
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
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-price)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-price)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="price"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                dot={true}
              />
            </AreaChart>
          ) : (
            // <LineChart
            //   accessibilityLayer
            //   data={chartData}
            //   margin={{
            //     left: 12,
            //     right: 12,
            //   }}
            // >
            //   <CartesianGrid vertical={false} />
            //   <XAxis
            //     dataKey="month"
            //     tickLine={true}
            //     axisLine={true}
            //     tickMargin={8}
            //     tickFormatter={(value) => value}
            //     style={{
            //       fontWeight: "bold",
            //     }}
            //   />
            //   <YAxis
            //     tickLine={true}
            //     axisLine={true}
            //     tickMargin={8}
            //     style={{
            //       fontWeight: "bold",
            //     }}
            //   />
            //   <ChartTooltip
            //     cursor={true}
            //     content={<ChartTooltipContent hideLabel />}
            //   />
            //   <Line
            //     dataKey="price"
            //     type="natural"
            //     stroke="var(--color-price)"
            //     strokeWidth={2}
            //     dot={true}
            //   />
            // </LineChart>
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
