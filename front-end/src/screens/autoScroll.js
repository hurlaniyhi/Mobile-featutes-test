import React, { Component, useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image
} from 'react-native'

const { width } = Dimensions.get('window');
const height = width * 0.7;

const AutoScroll = () => {
 const [search, setSearch] = useState("")
 const [sliderIndex, setSliderIndex] = useState(0)
 const [maxSlider, setMaxSlider] = useState(2)
 const [hold, setHold] = useState(null)
 const [banners, setBanners] = useState(
    [
        {_id: 1, imageUrl: require("../../background/back4.jpg")},
        {_id: 2, imageUrl: require("../../background/back3.jpg")},
        {_id: 3, imageUrl: require("../../background/back2.jpg")},
      ]
 )

    
 

function setRef(c){
    
   this.listRef = c;
   
 }

function scrollToIndex(index, animated){
    
   this.listRef && this.listRef.scrollToIndex({ index, animated })
 }

 useEffect(()=>{
   setInterval(function() {
    
     let nextIndex = 0

     if (sliderIndex < maxSlider) {
       nextIndex = sliderIndex + 1
     }

     scrollToIndex(nextIndex, true)
     setSliderIndex(nextIndex)
     
     
   }, 5000)
 }, [])

 
   return (
     <View style={styles.container}>
      

    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <FlatList
        ref={(c)=>setRef(c)}
        data={banners}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item._id}
        renderItem={({item, i}) => (
          <View key={i} style={{ height, width}}>
            <Image style={{ height, width }} source={item.imageUrl } />
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          let sliderIndex = event.nativeEvent.contentOffset.x ? event.nativeEvent.contentOffset.x/width : 0
          setSliderIndex(sliderIndex)
        }}
      />
      {/* <View style={styles.sliderContainer}>
        {
          banners.map(function(item, index) {
            return (
              <View key={index} style={styles.sliderBtnContainer}>
                <View style={styles.sliderBtn}>
                  {
                    sliderIndex == index ? <View style={styles.sliderBtnSelected}/> : null
                  }
                </View>
              </View>
            )
          }.bind(this))
        }
      </View> */}
    </ScrollView>
  </View>
);
   }





// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   View,
//   FlatList,
//   ScrollView,
//   Dimensions,
//   Image
// } from 'react-native'

// const { width } = Dimensions.get('window');
// const height = width * 0.7;

// export default class AutoScroll extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: '',
//       sliderIndex: 0,
//       maxSlider: 2,
//       banners: [
//         {_id: 1, imageUrl: require("../../background/back4.jpg")},
//         {_id: 2, imageUrl: require("../../background/back3.jpg")},
//         {_id: 3, imageUrl: require("../../background/back2.jpg")},
//       ],
//     }
//  }

//  setRef = (c) => {
//    this.listRef = c;
//  }

//  scrollToIndex = (index, animated) => {
//    this.listRef && this.listRef.scrollToIndex({ index, animated })
//  }

//  componentDidMount() {
//    setInterval(function() {
//      const { sliderIndex, maxSlider } = this.state
//      let nextIndex = 0

//      if (sliderIndex < maxSlider) {
//        nextIndex = sliderIndex + 1
//      }

//      this.scrollToIndex(nextIndex, true)
//      this.setState({sliderIndex: nextIndex})
//    }.bind(this), 5000)
//  }

//  render() {
    
//    return (
//      <View style={styles.container}>
      

//     <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//       <FlatList
//         ref={this.setRef}
//         data={this.state.banners}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         keyExtractor={item => item._id}
//         renderItem={({item, i}) => (
//           <View key={i} style={{ height, width}}>
//             <Image style={{ height, width }} source={item.imageUrl } />
//           </View>
//         )}
//         onMomentumScrollEnd={(event) => {
//           let sliderIndex = event.nativeEvent.contentOffset.x ? event.nativeEvent.contentOffset.x/width : 0
//           this.setState({sliderIndex})
//         }}
//       />
//       {/* <View style={styles.sliderContainer}>
//         {
//           this.state.banners.map(function(item, index) {
//             return (
//               <View key={index} style={styles.sliderBtnContainer}>
//                 <View style={styles.sliderBtn}>
//                   {
//                     this.state.sliderIndex == index ? <View style={styles.sliderBtnSelected}/> : null
//                   }
//                 </View>
//               </View>
//             )
//           }.bind(this))
//         }
//       </View> */}
//     </ScrollView>
//   </View>
// );
//    }
//  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollContainer: {
    flex: 1
  },
  sliderContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
    alignSelf: 'center'
  },
  sliderBtn: {
    height: 13,
    width: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  sliderBtnSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  sliderBtnContainer: {
    flexDirection: 'row', marginBottom: 24
  },
});


export default AutoScroll

