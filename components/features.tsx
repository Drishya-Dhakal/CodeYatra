"use client";

import React, { useState } from 'react';

interface WastePickupRequest {
    address: string;
    date: string;
    wasteType: string;
    quantity: string;
}

const Features: React.FC = () => {
    const [pickupRequest, setPickupRequest] = useState<WastePickupRequest>({
        address: '',
        date: '',
        wasteType: '',
        quantity: ''
    });

    const scheduleData = [
        { day: 'Monday', area: 'Koteshwor', type: 'Recyclable' },
        { day: 'Wednesday', area: 'Balkumari', type: 'Biodegradable' },
        { day: 'Friday', area: 'Gothatar', type: 'All Types' },
    ];

    const analyzeWaste = (wasteDescription: string) => {
        // This is a simplified waste analysis logic
        const recyclableKeywords = ['plastic', 'paper', 'glass', 'metal'];
        const biodegradableKeywords = ['food', 'vegetable', 'organic', 'leaves'];
        
        const description = wasteDescription.toLowerCase();
        
        if (recyclableKeywords.some(keyword => description.includes(keyword))) {
            return 'Recyclable';
        } else if (biodegradableKeywords.some(keyword => description.includes(keyword))) {
            return 'Biodegradable';
        }
        return 'Non-recyclable';
    };

    const handlePickupRequest = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the pickup request submission
        console.log('Pickup Request:', pickupRequest);
        // Reset form or show success message
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Waste Management Features</h1>

            {/* Waste Pickup Request Section */}
            <section className="mb-12 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Request Waste Pickup</h2>
                <form onSubmit={handlePickupRequest} className="space-y-4">
                    <div>
                        <label className="block mb-2">Address</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={pickupRequest.address}
                            onChange={(e) => setPickupRequest({...pickupRequest, address: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Preferred Date</label>
                        <input
                            type="date"
                            className="w-full p-2 border rounded"
                            value={pickupRequest.date}
                            onChange={(e) => setPickupRequest({...pickupRequest, date: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Waste Type</label>
                        <select
                            className="w-full p-2 border rounded"
                            value={pickupRequest.wasteType}
                            onChange={(e) => setPickupRequest({...pickupRequest, wasteType: e.target.value})}
                        >
                            <option value="">Select Type</option>
                            <option value="recyclable">Recyclable</option>
                            <option value="biodegradable">Biodegradable</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Submit Request
                    </button>
                </form>
            </section>

            {/* Collection Schedule Section */}
            <section className="mb-12 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Collection Schedule</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Day</th>
                                <th className="px-4 py-2">Area</th>
                                <th className="px-4 py-2">Waste Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((schedule, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2">{schedule.day}</td>
                                    <td className="px-4 py-2">{schedule.area}</td>
                                    <td className="px-4 py-2">{schedule.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Waste Analysis Section */}
            <section className="mb-12 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Waste Analysis</h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Describe your waste to determine if it's recyclable or biodegradable
                    </p>
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Describe the waste (e.g., plastic bottles, food scraps)"
                        rows={4}
                        onChange={(e) => {
                            const result = analyzeWaste(e.target.value);
                            console.log('Analysis Result:', result);
                        }}
                    />
                    <div className="mt-4">
                        <h3 className="font-semibold">Common Categories:</h3>
                        <ul className="list-disc list-inside mt-2">
                            <li>Recyclable: Plastic, Paper, Glass, Metal</li>
                            <li>Biodegradable: Food waste, Vegetables, Leaves</li>
                            <li>Non-recyclable: Mixed materials, Contaminated items</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
