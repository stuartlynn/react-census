import React from "react";
import { storiesOf } from "@storybook/react";
import { DataTable } from '../Components/DataTable';

storiesOf("Button", module).add("with text", () => <p>Test!</p>);
storiesOf("DataTable", module).add("Data Table", () => <div>
    <DataTable
        variables={[]}
        vintage={2015}
        table={''}
    />
</div>);
