
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart, Tooltip } from "recharts";
//mock ata
const mockData = {
  weekly: [
    { day: "Mon", recycled: 4, waste: 2 },
    { day: "Tue", recycled: 3, waste: 1 },
    { day: "Wed", recycled: 5, waste: 3 },
    { day: "Thu", recycled: 6, waste: 2 },
    { day: "Fri", recycled: 4, waste: 2 },
    { day: "Sat", recycled: 7, waste: 3 },
    { day: "Sun", recycled: 5, waste: 2 },
  ],
  community: [
    { month: "Jan", impact: 245 },
    { month: "Feb", impact: 288 },
    { month: "Mar", impact: 367 },
    { month: "Apr", impact: 412 },
    { month: "May", impact: 478 },
    { month: "Jun", impact: 523 },
  ],
  categories: [
    { name: "Paper", amount: 45 },
    { name: "Plastic", amount: 32 },
    { name: "Glass", amount: 28 },
    { name: "Metal", amount: 15 },
    { name: "Organic", amount: 38 },
  ],
};

const ImpactDashboard = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Environmental Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your recycling progress and see how your efforts contribute to a
            cleaner environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weekly Progress Chart */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
              <CardDescription>Your recycling vs. waste ratio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    recycled: { color: "#2DD4BF" },
                    waste: { color: "#94A3B8" },
                  }}
                >
                  <BarChart data={mockData.weekly}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Bar dataKey="recycled" stackId="a" fill="var(--color-recycled)" />
                    <Bar dataKey="waste" stackId="a" fill="var(--color-waste)" />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border rounded shadow">
                              <p className="text-sm font-medium">{label}</p>
                              {payload.map((item, index) => (
                                <p key={index} className="text-sm">
                                  {item.name}: {item.value}kg
                                </p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Community Impact */}
          <Card>
            <CardHeader>
              <CardTitle>Community Impact</CardTitle>
              <CardDescription>Total waste reduction trend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    impact: { color: "#2DD4BF" },
                  }}
                >
                  <AreaChart data={mockData.community}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Area
                      type="monotone"
                      dataKey="impact"
                      stroke="var(--color-impact)"
                      fill="var(--color-impact)"
                      fillOpacity={0.2}
                    />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border rounded shadow">
                              <p className="text-sm font-medium">{label}</p>
                              <p className="text-sm">
                                Impact: {payload[0].value}kg
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recycling Categories */}
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
              <CardTitle>Recycling Categories</CardTitle>
              <CardDescription>Breakdown by material type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ChartContainer
                  config={{
                    amount: { color: "#2DD4BF" },
                  }}
                >
                  <LineChart data={mockData.categories}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="var(--color-amount)"
                      strokeWidth={2}
                    />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border rounded shadow">
                              <p className="text-sm font-medium">{label}</p>
                              <p className="text-sm">
                                Amount: {payload[0].value}kg
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
