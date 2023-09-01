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
          \n<Table.TR>
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

const componetPropsMap = [
  {
    name: 'View',
    extends:
      'Badge component is created using View component from reacr-native. It extends all the props supported by [React Native View](https://reactnative.dev/docs/view#props) and all the supported [utility props](https://ui.gluestack.io/docs/styling/utility-and-sx-props)',
  },
];

module.exports = {
  template,
};
