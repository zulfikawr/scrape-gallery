import React from "react";
import { PEOPLE } from "../constants";

export const Tables: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="border-b border-neutral-200 pb-6">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Structured Data
        </h2>
        <p className="text-neutral-500 text-sm mt-1">
          Tabular data structures, description lists, and nested hierarchies.
        </p>
      </div>

      <section>
        <h3 className="text-lg font-bold text-neutral-900 mb-4">
          Employee Directory
        </h3>
        <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm bg-white">
          <table className="w-full text-left text-sm" id="directory-table">
            <thead className="bg-neutral-50 text-neutral-900 font-semibold border-b border-neutral-200">
              <tr>
                <th className="p-4 w-20 font-mono text-xs uppercase tracking-wider">
                  ID
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-wider">
                  Employee
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-wider">
                  Role
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-wider">
                  Location
                </th>
                <th className="p-4 text-right font-mono text-xs uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {PEOPLE.map((person) => (
                <tr
                  key={person.id}
                  className="hover:bg-neutral-50 transition-colors person-row group"
                >
                  <td className="p-4 text-neutral-400 font-mono text-xs">
                    #{person.id.toString().padStart(4, "0")}
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-neutral-900 person-name group-hover:text-blue-700">
                      {person.name}
                    </div>
                    <div className="text-xs text-neutral-500 person-email font-mono mt-0.5">
                      {person.email}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border
                                        ${
                                          person.role === "Developer"
                                            ? "bg-blue-50 text-blue-700 border-blue-100"
                                            : person.role === "Manager"
                                              ? "bg-purple-50 text-purple-700 border-purple-100"
                                              : person.role === "Designer"
                                                ? "bg-pink-50 text-pink-700 border-pink-100"
                                                : "bg-neutral-100 text-neutral-600 border-neutral-200"
                                        }`}
                    >
                      {person.role}
                    </span>
                  </td>
                  <td className="p-4 text-neutral-600">{person.location}</td>
                  <td className="p-4 text-right">
                    <div
                      className="inline-block w-2 h-2 rounded-full bg-green-500"
                      title="Active"
                    ></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-neutral-400 font-mono text-right">
          Showing {PEOPLE.length} entries
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="border border-neutral-200 rounded-lg p-6 bg-white">
          <h3 className="font-bold mb-4 border-b border-neutral-100 pb-2">
            Definition Lists (DL)
          </h3>
          <dl className="space-y-4 text-sm">
            {PEOPLE.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
              >
                <dt className="font-bold text-neutral-900">{p.name}</dt>
                <dd className="sm:col-span-2 text-neutral-600 leading-relaxed">
                  {p.bio}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border border-neutral-200 rounded-lg p-6 bg-white">
          <h3 className="font-bold mb-4 border-b border-neutral-100 pb-2">
            Nested Lists (UL/OL)
          </h3>
          <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-800 text-sm">
            <li className="font-medium">
              North America Operations
              <ul className="list-[square] list-outside ml-6 mt-2 space-y-1 text-neutral-600">
                <li>New York HQ (Primary)</li>
                <li>
                  San Francisco Hub
                  <ul className="list-[circle] list-outside ml-6 mt-1 text-neutral-500 text-xs">
                    <li>Engineering Team A</li>
                    <li>Engineering Team B</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="font-medium pt-2">
              Europe Operations
              <ul className="list-[square] list-outside ml-6 mt-2 space-y-1 text-neutral-600">
                <li>London Branch</li>
                <li>Berlin Remote Hub</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
