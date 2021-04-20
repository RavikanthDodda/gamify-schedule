import React, { useEffect, useState } from "react";
import { StyleSheet,SafeAreaView,ScrollView, Text, View , Alert} from "react-native";
import { Snackbar } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import UserOffer from '../customer/components/UserOffer'
import UserOffersService from "../services/UserOffersService";

function UserOffersPage(props) {
  const { route, navigation} = props;
  const [offers, setOffers] = useState([]);
  const [showBar, setShowBar] = useState(false);
	const [message, setMessage] = useState();


  const loadOffers = () => {
    let data = UserOffersService.getOffers();
    console.log("-------");
    console.log(data);
    setOffers(UserOffersService.getOffers());
    console.log(offers);
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
     loadOffers();
  }, []);
    return (
      <React.Fragment>
      <SafeAreaView >
      <FlatList
        data={offers}
        renderItem={item => 
          <UserOffer item={item.item} title={item.item.title} description={item.item.description} cost={item.item.cost} expiry={item.item.expiry} extraDetails={item.item.extraDetails} navigation={navigation}/>
        }
      />
      </SafeAreaView>
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

export default UserOffersPage;