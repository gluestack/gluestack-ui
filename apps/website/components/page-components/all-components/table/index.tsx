import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Table } from '@/components/ui/table';
import { TableBody } from '@/components/ui/table';
import { TableHeader } from '@/components/ui/table';
import { TableRow } from '@/components/ui/table';
import { TableHead } from '@/components/ui/table';
import { TableData } from '@/components/ui/table';
import { TableFooter } from '@/components/ui/table';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Units</TableHead>
          <TableHead>Costs</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableData>Rajesh Kumar</TableData>
          <TableData>10</TableData>
          <TableData>$130</TableData>
        </TableRow>
        <TableRow>
          <TableData>Priya Sharma</TableData>
          <TableData>12</TableData>
          <TableData>$210</TableData>
        </TableRow>
        <TableRow>
          <TableData>Ravi Patel</TableData>
          <TableData>6</TableData>
          <TableData>$55</TableData>
        </TableRow>
        <TableRow>
          <TableData>Ananya Gupta</TableData>
          <TableData>18</TableData>
          <TableData>$340</TableData>
        </TableRow>
        <TableRow>
          <TableData>Arjun Singh</TableData>
          <TableData>2</TableData>
          <TableData>$35</TableData>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableHead>Total</TableHead>
          <TableHead>48</TableHead>
          <TableHead>$770</TableHead>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`}
      argTypes={{}}
      reactLive={{
        Table,
        TableBody,
        TableHeader,
        TableRow,
        TableHead,
        TableData,
        TableFooter,
      }}
    />
  );
}
