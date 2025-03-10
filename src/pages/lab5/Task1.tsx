import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";

type SalaryData = {
    baseSalary: number;
    bonus: number;
    taxes: number;
    afterShopping: number;
    sharedAmount: number;
};

export default function Task1() {
    const [salary, setSalary] = useState<string>("");
    const [result, setResult] = useState<SalaryData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculateSalary = () => {
        const baseSalary = parseFloat(salary);

        if (isNaN(baseSalary) || baseSalary <= 0) {
            setError("Будь ласка, введіть коректну суму зарплати.");
            setResult(null);
            return;
        }

        setError(null);
        const bonus = baseSalary * 0.15;
        const totalIncome = baseSalary + bonus;
        const taxes = totalIncome * 0.1;
        const afterShopping = totalIncome - taxes - 190;
        const sharedAmount = afterShopping / 2;

        setResult({
            baseSalary,
            bonus,
            taxes,
            afterShopping,
            sharedAmount,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Card className="p-6 shadow-lg rounded-2xl bg-[#f8f5f2]">
                <CardContent className="flex flex-col gap-4">
                    <h2 className="text-2xl text-gray-900 text-center">Введіть дані</h2>
                    <p className="text-gray-500 text-center">Введіть суму вашої заробітної плати для розрахунку</p>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="salary" className="font-medium text-gray-700">Заробітна плата</Label>
                        <Input
                            id="salary"
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="border p-3 rounded-lg"
                        />
                    </div>
                    <Button onClick={calculateSalary} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                        Розрахувати
                    </Button>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                </CardContent>
            </Card>

            {result && (
                <Card className="w-full max-w-2xl mt-6 p-6 shadow-lg rounded-2xl bg-[#f8f5f2]">
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex justify-center items-center">
                            <h2 className="text-2xl text-gray-900">Результати розрахунку</h2>
                        </div>
                        <Tabs defaultValue="steps">
                            <TabsList className="w-full flex justify-center items-center bg-gray-200 p-0">
                                <TabsTrigger value="steps" className="rounded-2 px-4 py-2 data-[state=active]:bg-gray-800">По кроках</TabsTrigger>
                                <TabsTrigger value="summary" className="rounded-2 px-4 py-2 data-[state=active]:bg-gray-800">Загальні підсумки</TabsTrigger>
                            </TabsList>
                            <TabsContent value="steps">
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-200 p-4 rounded-lg text-center">
                                        <p className="text-lg font-medium text-gray-700">Заробітна плата</p>
                                        <p className="text-2xl font-semibold">{result.baseSalary.toFixed(2)} ₴</p>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-lg text-center">
                                        <p className="text-lg font-medium text-green-700">Премія (15%)</p>
                                        <p className="text-2xl font-semibold text-green-600">{result.bonus.toFixed(2)} ₴</p>
                                    </div>
                                    <div className="bg-red-100 p-4 rounded-lg text-center">
                                        <p className="text-lg font-medium text-red-700">Податки (10%)</p>
                                        <p className="text-2xl font-semibold text-red-600">{result.taxes.toFixed(2)} ₴</p>
                                    </div>
                                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                                        <p className="text-lg font-medium text-blue-700">Похід у магазин</p>
                                        <p className="text-2xl font-semibold text-blue-600">190,00 ₴</p>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="summary">
                                <div className="mt-4 bg-blue-100 p-6 rounded-lg text-center">
                                    <p className="text-lg font-medium text-blue-700">Загальний залишок</p>
                                    <p className="text-3xl font-semibold text-blue-600">{result.afterShopping.toFixed(2)} ₴</p>
                                </div>
                                <div className="mt-4 bg-gray-200 p-6 rounded-lg text-center">
                                    <p className="text-lg font-medium text-gray-700">Кожному з подружжя</p>
                                    <p className="text-3xl font-semibold">{result.sharedAmount.toFixed(2)} ₴</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
