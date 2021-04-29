import React, { useEffect, useState } from "react";
import { StyleSheet,SafeAreaView, Text,ScrollView, View , Alert} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";
import UserCoupon from '../customer/components/UserCoupon'
import SponsorService from "../services/SponsorService";
import AddFAB from "../components/AddFAB";

function SponsorsCouponsPage(props) {
  const { route, navigation} = props;
  const [coupons, setCoupons] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [message, setMessage] = useState();
  let routePage = "Coupons-Form";


  const loadCoupons = async () => {
    let data = await SponsorService.getCoupons();
    setCoupons(data);
  };

  const notify = (mesg) => {
		setMessage(mesg);
		setShowBar(true);
   }

  if (props.route.params.action !== undefined) {
		let mesg = props.route.params.action;
    console.log(mesg);
		props.route.params.action = undefined;
		notify(mesg);
	}

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
        loadCoupons();
      });
  
      return unsubscribe;
    }, [navigation]);
    return (
    
     <React.Fragment>

     <SafeAreaView >
      <FlatList
        contentContainerStyle= {{paddingBottom: 200}}
        data={coupons}
        renderItem={item => 
          <UserCoupon item={item.item} title={item.item.title} description={item.item.description} cost={item.item.cost} expiry={item.item.expiry} navigation={navigation} extraDetails={item.item.extraDetails} 
          routeDetails={routePage} />
        }
      />
     </SafeAreaView>
     <AddFAB
        navigation={navigation}
        page="Coupons-Form"
        name={"Add New Coupon"}
      />
			<Snackbar
				visible={showBar}
				onDismiss={() => setShowBar(false)}
				action={{
					label: "Ok",
					onPress: () => {
						console.log("pressed");
					},
				}}
			>
				{message}
			</Snackbar>
		</React.Fragment>
    
    
  );
} 

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    fontWeight: 'bold',
    fontSize: 20,
    padding:10
    },
});

export default SponsorsCouponsPage;