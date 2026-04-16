"use client";

export default function TrackerPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Job Application Tracker
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Company</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-2">Google</td>
              <td className="p-2">Frontend Dev</td>
              <td className="p-2">Applied</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">Amazon</td>
              <td className="p-2">Backend Dev</td>
              <td className="p-2">Interview</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}
