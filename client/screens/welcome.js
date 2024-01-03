import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.iphone}>
        <View style={styles.div}>
          <View style={styles.frame}>
            <View style={styles.frame2}>
              <View style={styles.imageWrapper}>
                {/* <Image style={styles.image} source={require('./image-1.png')} /> */}
              </View>
              <View style={styles.gymsharkWrapper}>
                <Text style={styles.gymshark}>
                  <Text style={styles.textWrapper}>&nbsp;</Text>
                  <Text style={styles.span}>Gymshark</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.textWrapper2}>Welcome To Gymshark</View>
          <View style={styles.textWrapper3}>Create an account</View>
          <View style={styles.frame3}>
            <View style={styles.frameWrapper}>
              <View style={styles.frame4}>
                <View style={styles.imgWrapper}>
                  {/* <Image style={styles.img} source={require('./facebook.png')} /> */}
                </View>
                <Text style={styles.textWrapper4}>CONTINUE WITH FACEBOOK</Text>
              </View>
            </View>
            <View style={styles.frameWrapper}>
              <View style={styles.frame4}>
                <View style={styles.imgWrapper}>
                  {/* <Image style={styles.img} source={require('./google.png')} /> */}
                </View>
                <Text style={styles.textWrapper4}>CONTINUE WITH GOOGLE</Text>
              </View>
            </View>
            <View style={styles.frameWrapper}>
              <View style={styles.frame4}>
                <View style={styles.imgWrapper}>
                  {/* <Image style={styles.img} source={require('./apple-logo.png')} /> */}
                </View>
                <Text style={styles.textWrapper4}>CONTINUE WITH APPLE</Text>
              </View>
            </View>
          </View>
          <View style={styles.overlap}>
            {/* <Image style={styles.line} source={require('./line-4.svg')} /> */}
            {/* <Image style={styles.line} source={require('./line-5.svg')} /> */}
            <Text style={styles.or}>
              <Text style={styles.textWrapper5}>o</Text>
              <Text style={styles.textWrapper5}>r</Text>
            </Text>
          </View>
          <View style={styles.createAnAccountWrapper}>
            <Text style={styles.createAnAccount}>CREATE AN ACCOUNT</Text>
          </View>
          <Text style={styles.login}>LOGIN</Text>
          <View style={styles.divWrapper}>
            <View style={styles.frame5}>
              {/* <Image style={styles.image2} source={require('./image-6.png')} /> */}
              <Text style={styles.gymsharkDigitalPl}>GYMSHARK DIGITAL PL</Text>
            </View>
          </View>
          <View style={styles.widget}>
            <View style={styles.frame6}>
              <View style={styles.frame7}>
                <Text style={styles.textWrapper6}>5:24</Text>
              </View>
              <View style={styles.frame8}>
                <View style={styles.frame9}>
                  <View style={styles.rectangle} />
                  <View style={styles.rectangle2} />
                  <View style={styles.rectangle3} />
                  <View style={styles.rectangle4} />
                </View>
                {/* <Image style={styles.wifi} source={require('./wi-fi.png')} /> */}
                <View style={styles.group}>
                  <View style={styles.overlapGroup}>
                    <Text style={styles.textWrapper7}>100%</Text>
                  </View>
                  {/* <Image style={styles.polygon} source={require('./polygon-3.svg')} /> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iphone: {
    backgroundColor: '#9ac61c',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#9ac61c',
    height: 844,
    position: 'relative',
    width: 401,
  },
  frame: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    left: 174,
    position: 'absolute',
    top: 109,
    width: 76,
  },
  frame2: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flex: 0,
    flexDirection: 'column',
    marginLeft: -0.48,
    position: 'relative',
  },
  imageWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 1.56,
    height: 46.36,
    padding: 1.56,
    position: 'relative',
    width: 76,
  },
  gymsharkWrapper: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flex: 0,
    gap: 1.74,
    marginTop: -4,
    padding: 1.74,
    position: 'relative',
  },
  gymshark: {
    color: '#000000',
    fontFamily: 'Kanit-ExtraBold',
    fontSize: 11.6,
    fontWeight: '400',
    letterSpacing: -0.17,
    lineHeight: 'normal',
    marginTop: -0.17,
    position: 'relative',
    textAlign: 'center',
    width: 'fit-content',
  },
  textWrapper: {
    fontWeight: '800',
  },
  span: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '800',
  },
  textWrapper2: {
    color: '#000000',
    fontFamily: 'var(--bold-h3-font-family)',
    fontSize: 'var(--bold-h3-font-size)',
    fontStyle: 'var(--bold-h3-font-style)',
    fontWeight: 'var(--bold-h3-font-weight)',
    left: 20,
    letterSpacing: 'var(--bold-h3-letter-spacing)',
    lineHeight: 'var(--bold-h3-line-height)',
    position: 'absolute',
    textAlign: 'center',
    top: 201,
    width: 350,
  },
  textWrapper3: {
    color: '#000000',
    fontFamily: 'var(--sentence-semi-bold-font-family)',
    fontSize: 'var(--sentence-semi-bold-font-size)',
    fontStyle: 'var(--sentence-semi-bold-font-style)',
    fontWeight: 'var(--sentence-semi-bold-font-weight)',
    left: 124,
    letterSpacing: 'var(--sentence-semi-bold-letter-spacing)',
    lineHeight: 'var(--sentence-semi-bold-line-height)',
    position: 'absolute',
    textAlign: 'center',
    top: 343,
    whiteSpace: 'nowrap',
  },
  frame3: {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 17,
    left: 20,
    position: 'absolute',
    top: 411,
  },
  frameWrapper: {
    alignItems: 'flex-start',
    backgroundColor: '#000000',
    borderRadius: 10,
    display: 'flex',
    gap: 10,
    height: 40,
    padding: '8px 0px',
    position: 'relative',
    width: 350,
  },
  frame4: {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    gap: 10,
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
  },
  imgWrapper: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flex: 0,
    gap: 2.67,
    marginBottom: -10,
    marginTop: -10,
    position: 'relative',
  },
  textWrapper4: {
    color: '#ffffff',
    fontFamily: 'var(--button-font-family)',
    fontSize: 'var(--button-font-size)',
    fontStyle: 'var(--button-font-style)',
    fontWeight: 'var(--button-font-weight)',
    letterSpacing: 'var(--button-letter-spacing)',
    lineHeight: 'var(--button-line-height)',
    textAlign: 'center',
    width: '100%',
  },
  overlap: {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 6,
    left: 176,
    position: 'absolute',
    top: 618,
  },
  textWrapper5: {
    color: '#ffffff',
    fontFamily: 'var(--or-font-family)',
    fontSize: 'var(--or-font-size)',
    fontStyle: 'var(--or-font-style)',
    fontWeight: 'var(--or-font-weight)',
    letterSpacing: 'var(--or-letter-spacing)',
    lineHeight: 'var(--or-line-height)',
    textAlign: 'center',
    width: 17,
  },
  or: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    width: 'fit-content',
  },
  createAnAccountWrapper: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'flex-end',
    left: 131,
    position: 'absolute',
    top: 678,
  },
  createAnAccount: {
    color: '#ffffff',
    fontFamily: 'var(--button-font-family)',
    fontSize: 'var(--button-font-size)',
    fontStyle: 'var(--button-font-style)',
    fontWeight: 'var(--button-font-weight)',
    letterSpacing: 'var(--button-letter-spacing)',
    lineHeight: 'var(--button-line-height)',
    textAlign: 'center',
    width: 'fit-content',
  },
  login: {
    color: '#ffffff',
    fontFamily: 'var(--login-font-family)',
    fontSize: 'var(--login-font-size)',
    fontStyle: 'var(--login-font-style)',
    fontWeight: 'var(--login-font-weight)',
    letterSpacing: 'var(--login-letter-spacing)',
    lineHeight: 'var(--login-line-height)',
    textAlign: 'center',
    top: 759,
    position: 'absolute',
  },
  divWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    left: 131,
    position: 'absolute',
    top: 833,
  },
  frame5: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  gymsharkDigitalPl: {
    color: '#ffffff',
    fontFamily: 'var(--gymshark-digital-font-family)',
    fontSize: 'var(--gymshark-digital-font-size)',
    fontStyle: 'var(--gymshark-digital-font-style)',
    fontWeight: 'var(--gymshark-digital-font-weight)',
    letterSpacing: 'var(--gymshark-digital-letter-spacing)',
    lineHeight: 'var(--gymshark-digital-line-height)',
    textAlign: 'center',
    width: 'fit-content',
  },
  widget: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 345,
    position: 'absolute',
    top: 46,
  },
  frame6: {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 3,
    position: 'relative',
  },
  frame7: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 2,
    height: 18,
    justifyContent: 'flex-end',
    padding: '3px 8px',
    position: 'relative',
    width: 'fit-content',
  },
  textWrapper6: {
    color: '#000000',
    fontFamily: 'var(--time-font-family)',
    fontSize: 'var(--time-font-size)',
    fontStyle: 'var(--time-font-style)',
    fontWeight: 'var(--time-font-weight)',
    letterSpacing: 'var(--time-letter-spacing)',
    lineHeight: 'var(--time-line-height)',
    textAlign: 'center',
    width: 'fit-content',
  },
  frame8: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  frame9: {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
  },
  rectangle: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 10,
  },
  rectangle2: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 10,
  },
  rectangle3: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 10,
  },
  rectangle4: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 10,
  },
  wifi: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  group: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  overlapGroup: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 3,
    display: 'inline-flex',
    flexDirection: 'column',
    height: 18,
    justifyContent: 'flex-end',
    left: 4,
    position: 'absolute',
    top: 5,
    width: 25,
  },
  textWrapper7: {
    color: '#000000',
    fontFamily: 'var(--battery-font-family)',
    fontSize: 'var(--battery-font-size)',
    fontStyle: 'var(--battery-font-style)',
    fontWeight: 'var(--battery-font-weight)',
    letterSpacing: 'var(--battery-letter-spacing)',
    lineHeight: 'var(--battery-line-height)',
    textAlign: 'center',
    width: 'fit-content',
  },
  polygon: {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },
});

export { styles };