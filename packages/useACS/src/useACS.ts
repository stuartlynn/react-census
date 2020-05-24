import { useState, useEffect } from "react";
import census from "citysdk";
import { Vintage, ACSProduct, GeoHierarchy } from "@react-census/types";


type UseACSArgs = {
    vintage: Vintage,
    product: ACSProduct,
    variables: string[],
    geoHierarchy: GeoHierarchy
}

export enum LoadingState {
    pending = 'pending',
    loading = 'loading',
    failed = 'failed',
    done = 'done'
}

export function useACS({ vintage, product, variables, geoHierarchy }: UseACSArgs): [any[] | null | undefined, string | null | undefined, LoadingState] {
    const [results, setResult] = useState<any[] | null | undefined>(null);
    const [error, setError] = useState<string | null | undefined>(null);
    const [state, setState] = useState<LoadingState>(LoadingState.pending)
    useEffect(() => {
        setState(LoadingState.loading)
        census(
            {
                vintage: vintage,
                geoHierarchy: geoHierarchy,
                sourcePath: ["acs", product],
                values: variables
            },
            (error: any, result: any) => {
                if (error) {
                    setState(LoadingState.failed)
                    setError(error)
                } else {
                    setState(LoadingState.done)
                    setResult(result)
                }
            }
        );
    }, [vintage, product, variables, geoHierarchy]);

    return [results, error, state];
}
