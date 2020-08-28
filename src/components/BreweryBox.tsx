import React from "react";

export interface BreweryBoxProps {
	squareImage: string;
	title: string;
	description: string;
	createDate: string;
	establishedYear: string;
	statusText: string;
	websiteText: string;
	isOrganic: boolean;
}

export function BreweryBox(props: BreweryBoxProps) {
	return (
		<div className="w-full lg:max-w-full lg:flex">
			<div className="border-gray-400 text-center border-r border-b border-l border-t p-4 h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
				{props.squareImage !== "" && (
					<img
						className="mx-auto"
						src={props.squareImage}
						alt={props.title}
					/>
				)}
			</div>
			<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
				<div className="px-4 py-4">
					<div className="font-bold text-xl mb-2">{props.title}</div>
					<p className="text-gray-700 text-base">
						{props.description}
					</p>
				</div>
				<hr />
				<div className="mt-3 mb-1 overflow-hidden">
					<table className="table-auto">
						<tbody>
							<tr>
								<td className="border px-4 py-2 bg-gray-400 text-right font-bold">
									C. Date
								</td>
								<td className="border px-4 py-2">
									{props.createDate}
								</td>
							</tr>
							<tr>
								<td className="border px-4 py-2 bg-gray-400 text-right font-bold">
									Est.
								</td>
								<td className="border px-4 py-2">
									{props.establishedYear}
								</td>
							</tr>
							<tr>
								<td className="border px-4 py-2 bg-gray-400 text-right font-bold">
									Status
								</td>
								<td className="border px-4 py-2">
									{props.statusText}
								</td>
							</tr>
							<tr>
								<td className="border px-4 py-2 bg-gray-400 text-right font-bold">
									Website
								</td>
								<td className="border px-4 py-2">
									{props.websiteText}
								</td>
							</tr>
							<tr>
								<td className="border px-4 py-2 bg-gray-400 text-right font-bold">
									Organic
								</td>
								<td
									className={`border px-4 py-2 text-gray ${
										props.isOrganic
											? "bg-green-300"
											: "bg-red-300"
									}`}
								>
									{props.isOrganic ? "Yes" : "No"}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
