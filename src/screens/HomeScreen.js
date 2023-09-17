import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '@components/features';
import {JarvisMessage} from '@constants';
import Voice from '@react-native-community/voice';
import {apiCall} from '@api/openAi';
export default function HomeScreen() {
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [result, setResult] = useState('');
  const ScrollViewRef = useRef();
  const onSpeechStartHandler = e => {
    console.log('speech start handler');
  };
  const onSpeechEndHandler = e => {
    setRecording(false);
    console.log('speech end handler');
  };
  const onSpeechResultsHandler = e => {
    console.log('voice event', e);
    const text = e.value[0];
    setResult(text);
  };
  const onSpeechErrorHandler = e => {
    console.log('speech error', e);
  };
  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-GB'); //en-Us
    } catch (error) {
      console.log(error);
    }
  };
  const stopRecording = async () => {
    setRecording(true);
    try {
      await Voice.stop();
      setRecording(false);
      fetchResponse();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchResponse = () => {
    if (result.trim().length > 0) {
      let newMessages = [...messages];
      newMessages.push({role: 'user', content: result.trim()});
      setMessages([...newMessages]);
      apiCall(result.trim(), newMessages).then(res => {
        // console.log('got api data:', res);
        if (res.success) {
          setMessages([...res.data]);
          setResult('');
        } else {
          Alert.alert('error', res.msg);
        }
      });
    }
  };
  const stopSpeaking = () => {
    setSpeaking(false);
  };
  const clear = () => {
    setMessages([]);
  };
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  console.log('result:', result);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <SafeAreaView style={{flex: 1, marginLeft: 5, marginRight: 5}}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <Image
            style={{height: hp(15), width: hp(15)}}
            source={require('@assets/images/bot.png')}
          />
        </View>
        {/* {<Features />} */}
        {messages.length > 0 ? (
          <View style={{flex: 1}}>
            <Text style={{fontSize: wp(5), fontWeight: 'bold'}}>Assistant</Text>
            <View
              style={{
                height: hp(58),
                backgroundColor: '#bfbfbf',
                margin: 10,
                borderRadius: 30,
              }}>
              <ScrollView
                style={{margin: 12}}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                {messages.map((message, key) => {
                  if (message.role == 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View
                          key={key}
                          style={{
                            padding: 2,
                            borderRadius: 2,
                            backgroundColor: '00ff99',
                          }}>
                          <Image
                            source={{uri: message.content}}
                            style={{
                              height: wp(60),
                              width: wp(60),
                              borderRadius: 30,
                              marginTop: 10,
                            }}
                          />
                        </View>
                      );
                    } else {
                      return (
                        <View
                          key={key}
                          style={{
                            width: wp(70),
                            backgroundColor: '#ffffff',
                            borderRadius: 5,
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 7,
                            backgroundColor: '#00ff99',
                          }}>
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}
                        key={key}>
                        <View
                          style={{
                            width: wp(70),
                            backgroundColor: '#ffffff',
                            borderRadius: 5,
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 7,
                          }}>
                          <Text style={{textAlign: 'left'}}>
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              {/*recording stop icon*/}
              <Image
                style={{width: hp(10), height: hp(10)}}
                source={require('@assets/images/voiceLoading.gif')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/*recording start icon*/}
              <Image
                style={{width: hp(10), height: hp(10)}}
                source={require('@assets/images/recordingIcon.png')}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              style={{
                position: 'absolute',
                right: 40,
                backgroundColor: '#666666',
                borderRadius: 20,
                bottom: 25,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  padding: 10,
                }}>
                Clear
              </Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              style={{
                position: 'absolute',
                left: 40,
                backgroundColor: 'red',
                borderRadius: 20,
                bottom: 25,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  padding: 10,
                }}>
                Stop
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
