import '@shopify/polaris/dist/styles.css';
import { AppProvider, Page, Card, Button,Tag, Popover, OptionList } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React, { useState, useCallback } from 'react';
import Salestable from './Salestable';
import './Sales.css';

function Sales() {
  const [selected, setSelected] = useState([]);
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Options
    </Button>
  );
  return (

    <div className="salecontainer">
      <Card className="ResourcesList">
       <AppProvider i18n={enTranslations}>
          <Page title="">
            <Card>
              <Tag>This month</Tag>
              <Tag>This week</Tag>
              <Tag>Today</Tag>
              <Tag>Custom</Tag>
              <Button onClick={() => alert('Button clicked!')}>Example button</Button>
            </Card>
            <Card></Card>
            <Card>
              <Tag>1 Selected</Tag>
              <Tag>Approved Selected</Tag>
              <Tag>Reject Selected</Tag>
              <Tag>More action</Tag>
            </Card>
          </Page>
          <Page title="Sales by product">
            <Salestable />
          </Page>
          {/* <Salestable /> */}
        </AppProvider>


        <div style={{ height: '275px', marginLeft: '500px' }}>
          <Popover
            active={popoverActive}
            activator={activator}
            onClose={togglePopoverActive}
          >

            <OptionList
              title="Inventory Location"
              onChange={setSelected}
              options={[
                {
                  value: 'byward_market',
                  label: 'Byward Market',
                  active: true,
                },

              ]}
              selected={selected}
            />
          </Popover>

        </div>
      </Card>
    </div>


  );
}

export default Sales;
