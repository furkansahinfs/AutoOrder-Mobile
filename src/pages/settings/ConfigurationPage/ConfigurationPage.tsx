import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './ConfigurationPage.styles';

export default function ConfigurationPage() {
  const [backShelfChoices, setBackShelfChoices] = useState<Array<any>>([]);
  const [backShelfItems, setBackShelfItems] = useState<Array<any>>([
    { name: 'Milk', size: '1X', type: 'Back' },
    { name: 'Juice', size: '1X', type: 'Back' },
    { name: 'Yoghurt', size: '3X', type: 'Back' },
    { name: 'Butterfly', size: '2X', type: 'Back' },
    { name: 'Jam', size: '2X', type: 'Back' },
    { name: 'AAAAAAA', size: '1X', type: 'Back' },
    { name: 'BBBBBB', size: '1X', type: 'Back' },
    { name: 'CCCCCC', size: '3X', type: 'Back' },
    { name: 'DDDDDD', size: '2X', type: 'Back' },
    { name: 'EEEEEE', size: '2X', type: 'Back' },
  ]);
  const [frontShelfChoices, setFrontShelfChoices] = useState<Array<any>>([]);
  const [frontShelfItems, setFrontShelfItems] = useState<Array<any>>([
    { name: 'Egg', size: '2X', type: 'Front' },
    { name: 'Cheese', size: '2X', type: 'Front' },
    { name: 'Chocolate', size: '1X', type: 'Front' },
    { name: 'Olive', size: '1X', type: 'Front' },
    { name: 'Tomato Paste', size: '1X', type: 'Front' },
  ]);

  useEffect(() => {
    (async () => {
      //await fetchProfile();
    })();
  }, [backShelfChoices]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={'handled'} />
      <View>
        <DropdownMenu
          choices={backShelfItems}
          currentChoice={backShelfChoices}
          setChoice={setBackShelfChoices}
          multipleChoice={true}
          dropdownTitle={'Select Back Shelf Items'}
          itemKey={'name'}
          titleKey={'name'}
        />

        <DropdownMenu
          choices={frontShelfItems}
          currentChoice={frontShelfChoices}
          setChoice={setFrontShelfChoices}
          multipleChoice={true}
          dropdownTitle={'Select Front Shelf Items'}
          itemKey={'name'}
          titleKey={'name'}
        />
      </View>
    </SafeAreaView>
  );
}
