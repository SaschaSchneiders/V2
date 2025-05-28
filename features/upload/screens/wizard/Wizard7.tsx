import React from 'react';
import { 
  View, 
  StyleSheet, 
  SafeAreaView,
  Text
} from 'react-native';
import { useRouter } from 'expo-router';

import { useThemeColor } from '@/hooks/useThemeColor';
import { HeaderNavigation } from '@/shared-components/navigation/HeaderNavigation';
import { spacing } from '@/config/theme/spacing';

interface Wizard7Props {
  onOpenSidebar?: () => void;
}

export default function Wizard7({ onOpenSidebar }: Wizard7Props) {
  const colors = useThemeColor();
  const router = useRouter();

  const handleBackPress = () => {
    // Zurück zu Wizard 6
    console.log('🔙 Zurück zu Wizard 6');
  };

  const handleNext = () => {
    // Navigation zum nächsten Wizard-Screen
    console.log('🚀 Weiter zu Wizard 8');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      {/* Header Navigation */}
      <HeaderNavigation 
        title="Wizard 7/8"
        onBackPress={handleBackPress}
        showBackButton={true}
      />
      
      {/* Content */}
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Wizard Screen 7
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Hier kommt der Inhalt für Schritt 7
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.l,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: spacing.m,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
}); 