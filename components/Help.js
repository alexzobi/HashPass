import React, {Component} from 'react';
import {StyleSheet, View, 
        TouchableOpacity,
        Text, Image,
        ScrollView} from 'react-native';
import {Button} from '../utility components';

const Help = (props) =>{
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Image resizeMethod='scale' style={styles.logo} 
            source={require('../public/images/background.png')} />
      <ScrollView style={styles.scroll}>
        <Text style={styles.lecture}>{text}</Text>
        <Button style={styles.button}
                title="Got it!" 
                onPress={()=>navigate('Menu')}/>
      </ScrollView>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  lecture: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    alignSelf: "center",
    height: 45,
    margin: 20
  },
  logo: {
    position: 'absolute',
  },
  scroll: {
    'margin':25
  },
  logout: {
    padding: 10
  }
});

const text = "Welcome to Hash Pass! \n\n Why use this app? To be honest, we're not really sure...Just kidding. The idea behind this app is to generate unique and complex passwords for every online account you have. Your passwords should be unique across accounts to reduce risk of security breech and limit damage when it does happen.\n\n The fact of the matter is that people have too many accounts these days to keep track of multiple passwords across many accounts. This doesn't seem like a huge issue except that some use the same password for a non-secure service as they do for something like a bank account, or worse, the same password for all accounts, leaving themselves at a huge risk. Hackers know this so instead of trying to hack a bank account, they just hack the unsecure service and then try the account information they collect on services like banks.\n\n To understand why you should use this app, you must first understand what password hashing is. \n\n To hash a string of text is to scramble it in a way that is seemingly random and impossible to decode. Is it random? No. But imagine this. If I tell you that I added two numbers to get to 50 and asked you to guess the two numbers, you would be hard pressed to guess correctly. This is the concept behind hashing. It is an irreversible process. Even if one hashed password is discovered, there is no way for the hacker to get passwords to your other accounts.\n\n There are known hashing algorithms out there and this app uses a common and very good one. As well, we add your unique 'salt' to every password to ensure no duplicates across accounts. For this reason, you should make your salts as unique as possible. Don't worry about remembering them, so get weird.\n\n Speaking of remembering, this app DOES NOT store passwords. The only things this app stores are users, the accounts for each user, the account salts and the hashed password length. It does not store the hashed password or your original password. So even if your phone is stolen, your original password cannot be discovered, making even signing into this app impossible.\n\n Most importantly, your password isn't hashed just once. It's hashed thousands of times before you're given the output. Why? A good hashing takes time. This prevents hackers from running code to try and guess the password with brute force. If the function only takes ten milliseconds to run, they could check a hundred passwords in one second. But if the function takes two seconds to run, the brute force approach becomes impossibly long. This is why signing in to the app and hashing or checking the password takes a while. It's not an issue with your phone or the app. It's security. And security is sexy.\n\n So hash on, my friend. Hash your way to a safer future."