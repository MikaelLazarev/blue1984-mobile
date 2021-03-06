/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {Account} from '../../core/accounts';

interface AccountCardProps {
  data: Account;
  onSelect: (id: string) => void;
}

export function AccountCard({
  data,
  onSelect,
}: AccountCardProps): React.ReactElement {
  const title = data.name;

  return (
    <TouchableOpacity onPress={() => onSelect(data.id.toString())}>
      <View style={styles.container}>
        <View>
          <View style={{paddingTop: 3}}>
            <Avatar
              rounded
              source={{uri: data.profile_image_url}}
              renderPlaceholderContent={<ActivityIndicator />}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text h4>{title}</Text>
            <Text>{`Cached: ${data.cached || '-'}  Deleted: ${
              data.deleted || '-'
            }`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 18,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 5,
    marginTop: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 20,
    flex: 1,
    alignContent: 'flex-start',
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default AccountCard;
