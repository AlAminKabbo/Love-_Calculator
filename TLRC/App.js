import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  Keyboard,
} from 'react-native';

const App = () => {
  const [renewFees, setRenewFees] = useState('');
  const [signbordCharge, setSignbordCharge] = useState('');
  let [month, setMonth] = useState('');
  const [pressed, setPresed] = useState(false);

  if (month <= 3) {
    month = 0;
  }
  const serviceCharge = 2500;
  const pickAndDrop = 500;
  let vat = 0;
  let totalFine = 0;
  let totalGovtFees = 0;
  var year = month / 12;
  let findYear = function () {
    year = year.toString();
    let getYear = year.split('.');
    let numberOfyear = Number(getYear[0]) + 1;
    return (year = numberOfyear);
  };
  let sourceTax = 3000 * findYear();

  let result = Number(renewFees) + Number(signbordCharge);
  let perMonth = result * 0.1;
  totalFine = perMonth * Number(month);
  let totalFineTwo = totalFine.toFixed(2);
  vat = (result + totalFine + sourceTax) * 0.15;
  let VAT = vat.toFixed(2);
  totalGovtFees = result + totalFine + vat + sourceTax;
  let totalGovtFeesTwo = totalGovtFees.toFixed(2);

  let grandTotal = totalGovtFees + serviceCharge + pickAndDrop;
  grandTotal = Math.floor(grandTotal);

  const showDetails = () => {
    return (
      <ScrollView>
        <View style={styles.myView}>
          <Text selectable={true} style={styles.costText}>
            Renew fees -------------- BDT {renewFees}
            {'\n'}Signboard Charge ---- BDT {signbordCharge}
            {'\n'}Fine for {month} Month
            {'\n'}Total Fine ----------------- BDT {totalFineTwo}
            {'\n'}Source Tax (3000*{findYear() - 1}): BDT {sourceTax}
            {'\n'}15% VAT ------------------- BDT {VAT}
            {'\n'}* Total Govt. fees ----- BDT {totalGovtFeesTwo}
            {'\n'}Service Charge --------- BDT {serviceCharge}
            {'\n'}Pick & Drop: {pickAndDrop} [if applicable]
            {'\n'}------------------------------------------------------
            {'\n'}*** Grand Total Cost for your
            {'\n'}Trade License Renew{' '}
            <Text style={styles.finalcost}>BDT {grandTotal} TK </Text>
          </Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.myView}>
      <Image source={require('.//image/BB.png')} style={styles.img} />
      <Text style={styles.bbSize}>BreakBite</Text>
      <Text style={styles.headinSize}>Trade License Renew Calculator</Text>
      <Text style={styles.dev}>developed by Al Amin Kabbo</Text>
      {pressed ? showDetails() : null}
      <TextInput
        style={styles.inputStyle}
        //value={renewFees.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        placeholder="Enter your Renew Fees"
        onChangeText={text => setRenewFees(text)}
        keyboardType={'number-pad'}
      />

      <TextInput
        style={styles.inputStyle}
        placeholder="Signboard Charge"
        onChangeText={text => setSignbordCharge(text)}
        keyboardType={'number-pad'}
      />

      <TextInput
        style={styles.inputStyle}
        placeholder="Fine for 12 Month"
        onChangeText={text => setMonth(text)}
        keyboardType={'number-pad'}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          if (isNaN(renewFees) || isNaN(signbordCharge) || isNaN(month)) {
            Alert.alert(
              'Opps!!',
              "It's Not  a  Number\nPlease  Enter  a Valid Number..!!",
            );
          } else if (renewFees === '') {
            Alert.alert('Opps!!', 'Add Renew Fees then try again...');
          } else if (signbordCharge === '') {
            Alert.alert('Opps!!', 'Add Signboard Charge then try again...');
          } else {
            pressed ? setPresed(false) : setPresed(true);
            Keyboard.dismiss();
          }
        }}>
        <Text style={styles.buttonText}>
          {!pressed ? 'Calculate  Fees' : 'Back'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  myView: {
    flex: 2,
    padding: 13,
    margin: 2,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headinSize: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: -5,
    textAlign: 'center',
  },
  bbSize: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 1,
    textAlign: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
  },
  buttonStyle: {
    marginTop: 15,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
  },
  costText: {
    fontSize: 18,
    padding: 7,
    lineHeight: 25,
  },
  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dev: {
    fontSize: 12,
    textAlign: 'center',
  },
  img: {
    alignSelf: 'center',
    height: 75,
    width: 75,
    borderRadius: 15,
  },
  finalcost: {
    fontWeight: 'bold',
  },
});

export default App;
