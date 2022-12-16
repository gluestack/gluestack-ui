import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native-web';

import { H1 } from '@expo/html-elements';

import { Button } from '@gluestack/ui-components';
import { Text as UIText } from '@gluestack/ui-components';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <ScrollView>
      <View style={[styles.wrapper, styles.header]} /** Header */>
        <View
          style={[
            styles.container,
            { flexDirection: 'row', justifyContent: 'space-between' },
          ]}
        >
          <Button>
            <Button.Text>Hello</Button.Text>
          </Button>

          <UIText>Viraj</UIText>
          <View style={[styles.headerLeft, { flexDirection: 'row' }]}>
            <Image
              src="/64.png"
              width={24}
              height={24}
              style={{
                marginRight: 12,
                borderRadius: 24,
              }}
            />
            <Text style={[styles.headerText, { alignSelf: 'center' }]}>
              gluestack
            </Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={[styles.headerText, styles.headerMenu]}>About</Text>
            <DropdownHeader />
            <HeaderCTA />
          </View>
        </View>
      </View>

      <View style={[styles.wrapper, styles.body]} /** Body */>
        <View style={styles.container}>
          {Array.from(Array(100).keys()).map((i) => {
            return (
              <>
                <View style={{ width: '100%' }}>
                  <H1
                    style={{
                      fontSize: 72,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      width: '100%',
                      marginTop: 60,
                    }}
                  >
                    The future is here
                  </H1>
                  <Text
                    style={{
                      fontSize: 24,
                      textAlign: 'center',
                      width: '100%',
                      marginTop: 20,
                    }}
                  >
                    Welcome to the world of gluestack and flaunt!
                  </Text>
                </View>
                <View style={{ width: '100%', marginTop: 60 }}>
                  <View style={{ background: '#DDD', height: 300 }}>
                    <Image
                      src="/1024.png"
                      width="512"
                      height="400"
                      style={{
                        width: '100%',
                      }}
                    />
                  </View>
                </View>
              </>
            );
          })}
        </View>
      </View>

      <View style={[styles.wrapper, styles.footer]} /** Footer */>
        <View style={styles.container}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function HeaderCTA() {
  const [hover, setHover] = useState(false);
  return (
    <Pressable
      style={[
        styles.headerCTA,
        styles.headerMenu,
        hover ? styles.headerCTAHover : null,
      ]}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
    >
      <Text style={[styles.headerCTAText]}>Help</Text>
    </Pressable>
  );
}

function DropdownHeader() {
  const [hover, setHover] = useState(false);
  return (
    <Pressable
      style={{ flexDirection: 'row', position: 'relative' }}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
    >
      <Text style={[styles.headerText, styles.headerMenu]}>More</Text>
      <View
        style={{
          position: 'absolute',
          background: '#FFFFFF',
          border: '1px solid #DDD',
          top: 24,
          right: 0,
          display: hover ? 'block' : 'none',
        }}
      >
        <View style={{ borderBottom: '1px solid #EEE', padding: 8 }}>
          <Text>Team</Text>
        </View>
        <View style={{ borderBottom: '1px solid #EEE', padding: 8 }}>
          <Text>Download</Text>
        </View>
        <View style={{ borderBottom: '1px solid #EEE', padding: 8 }}>
          <Text>Hire us</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  headerText: {
    color: 'white',
  },
  headerMenu: {
    marginLeft: 15,
    alignSelf: 'center',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
  },
  footerText: {
    color: 'white',
  },
  footer: {
    backgroundColor: '#222',
  },
  body: {
    minHeight: '100vh',
  },
  wrapper: {
    //border: "1px solid #F00",
    display: 'flex',
    alignElements: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    //border:"1px solid green",
    width: 800,
    margin: '0 auto',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerCTA: {
    backgroundColor: '#007bff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
  },
  headerCTAHover: {
    backgroundColor: '#119bff',
  },
  headerCTAText: {
    color: 'white',
  },
});
