import React from 'react'
import { VegaLite } from 'react-vega';
import { useACS } from '@react-census/use-acs'
import { Vintage, ACSProduct, GeoHierarchy, BAR, ORDINAL, QUANTITATIVE } from '@react-census/types'



type PopulationPyramid = {
    vintage: Vintage,
    product: ACSProduct,
    variables: string[],
    geoHierarchy: GeoHierarchy
}

const spec = {
    width: 400,
    height: 200,
    mark: BAR,
    encoding: {
        x: { field: 'a', type: ORDINAL },
        y: { field: 'b', type: QUANTITATIVE },
    },
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
}

const barData = {
    table: [
        { a: 'A', b: 28 },
        { a: 'B', b: 55 },
        { a: 'C', b: 43 },
        { a: 'D', b: 91 },
        { a: 'E', b: 81 },
        { a: 'F', b: 53 },
        { a: 'G', b: 19 },
        { a: 'H', b: 87 },
        { a: 'I', b: 52 },
    ],
}

export function PopulationPyramid({ vintage, product, variables, geoHierarchy }: PopulationPyramid) {
    const [result, error, status] = useACS({ vintage, product, variables, geoHierarchy })

    return (
        <div className='population-pyramid'>
            <VegaLite
                spec={spec}
                data={barData}
            />
        </div>
    )
}