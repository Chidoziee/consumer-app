import React from "react";
import { View } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { PageContainer, ContentContainer } from "./notificationsStyles";
import { Header } from "../../components/header/header.component";
import Crunchies from "../../assets/Crunchies.png";
import { Spacer } from "../../components/spacer/spacer.component";
import { MultiPurposeCard } from "../../components/MultiPurposeCard/multi-purpose-card.component";
import { SearchBar } from "../../components/SearchBar/searchBar.component";
import { NotificationCard } from "../../components/NotificationCard/notificationCard";

const NotificationsScreen = () => {
  const NotificationsCardData = [
    { image: Crunchies, timeStamp: "today", orderNumber: "#CR868775" },
    { image: Crunchies, timeStamp: "today", orderNumber: "#PC868778" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#DC868774" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#AF868773" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#CR868772" },
    { image: Crunchies, timeStamp: "yesterday", orderNumber: "#CR868771" },
    { image: Crunchies, timeStamp: "wednesday", orderNumber: "#CR868779" },
  ];

  return (
    <SafeArea showStatusBar={false}>
      <PageContainer paddingHorizontal>
        <Header text="Notifications" />
        <Spacer size="large" position="top" />
        <ContentContainer
          showsVerticalScrollIndicator={false}
          data={NotificationsCardData}
          // key={Math.random()}
          renderItem={({ item }) => (
            <View key={item.orderNumber}>
              <NotificationCard
                image={item.image}
                timeStamp={item.timeStamp}
                orderNumber={item.orderNumber}
              />
              <Spacer size="medium" position="top" />
            </View>
          )}
        />
      </PageContainer>
    </SafeArea>
  );
};
export default NotificationsScreen;
