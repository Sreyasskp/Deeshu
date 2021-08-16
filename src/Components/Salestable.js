import '@shopify/polaris/dist/styles.css';
import {AppProvider, Page, Card,Badge,DataTable,Checkbox, Subheading,TextContainer,Heading} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React, {useState, useCallback} from 'react';


function Salestable() {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
    const rows = [
      [    <Checkbox
        label="Basic checkbox"
        checked={checked}
        onChange={handleChange}
      />,
      'October 22nd 11.30am', '+919633262579', <Badge>Exported</Badge>,
      <span>
         <TextContainer>
  <Heading>Binse Abraham wrote a review sbout Boho bangle bracelet</Heading>
  <Subheading>Awesome package</Subheading>
  <p>
  the product came in a well packed condition, But it took 3,4 days to despatch, Overall happy with product
  </p>
</TextContainer>
      </span>
     
       ],
      [   <Checkbox
        label="Basic checkbox"
        checked={checked}
        onChange={handleChange}
      />,'Mauve Cashmere Scarf', '$230.00', '+919633262579',<Badge>Published</Badge>,  <span>
      <TextContainer>
<Heading>Sruthi Nair wrote a review sbout Boho bangle bracelet</Heading>
<Subheading>No words to explain!!!</Subheading>
<p>
Nice top,fast delivery But it took 3,4 days to despatch, Overall happy with product
</p>
</TextContainer>
   </span>]
    
    ];

  return (

<AppProvider i18n={enTranslations}>
    <Page title="Sales by product">
      <Card>
        <DataTable
          showTotalsInFooter
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'number',
            'text',
          ]}
          headings={[
            'All',
            'Rating',
            'Created',
            'Phone',
            'Status',
            'Review'
          ]}
          rows={rows}
          totals={[]}
          totalsName={{
            singular: 'Total net sales',
            plural: 'Total net sales',
          }}
        />
      </Card>
    </Page>
  </AppProvider>

  );
}

export default Salestable;
