function template(propsArr, fileName) {
  return `
#### ${fileName}

<AppProvider>
  <TableContainer>
    <Table>
      <Table.THead>
        <Table.TR>
          <Table.TH>
            <Table.TText>Name</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Value</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Default</Table.TText>
          </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
     ${propsArr.map((prop) => {
       return `
          <Table.TR>
          <Table.TD>
            <Table.TText>
              <InlineCode>${prop.key}</InlineCode>
            </Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>${prop.value.join(' | ')}</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>-</Table.TText>
          </Table.TD>
        </Table.TR>
      `;
     })}
      </Table.TBody>
    </Table>
  </TableContainer>
</AppProvider>
`;
}

module.exports = {
  template,
};
