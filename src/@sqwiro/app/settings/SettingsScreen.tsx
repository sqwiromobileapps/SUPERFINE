import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Block, Text, Header } from '@expocraft/core';
import {
  MdiWhiteBalanceSunny,
  MdiWeatherNight,
  MdiThemeLightDark,
  MdiCheckCircle,
  MdiPalette,
} from '@expocraft-icons/mdi';
import useAppTheme from '@sqwiro/appcore/theme/useAppTheme';
import { useThemeMode, ThemeModePref } from '@sqwiro/appcore/theme';

const APPEARANCE_OPTIONS: {
  value: ThemeModePref;
  label: string;
  description: string;
  Icon: any;
}[] = [
  {
    value: 'light',
    label: 'Light',
    description: 'Always use the light appearance',
    Icon: MdiWhiteBalanceSunny,
  },
  {
    value: 'dark',
    label: 'Dark',
    description: 'Always use the dark appearance',
    Icon: MdiWeatherNight,
  },
  {
    value: 'system',
    label: 'System',
    description: 'Match your device appearance',
    Icon: MdiThemeLightDark,
  },
];

const prettyTheme = (name?: string) =>
  `${name || ''}`.replace(/Theme$/i, '').replace(/^./, (c) => c.toUpperCase());

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const { colors, sizes } = useAppTheme();
  const { mode, setMode } = useThemeMode();

  return (
    <Block color={colors.background}>
      <Header
        hasHeight
        color={colors.background}
        onBack={() => navigation.goBack()}
      >
        <Block row middle>
          <Text h4 bold color={colors.foreground}>
            Settings
          </Text>
        </Block>
      </Header>

      <ScrollView
        contentContainerStyle={{ padding: sizes.padding, paddingBottom: 40 }}
      >
        {/* Appearance */}
        <Text
          bold
          color={colors.mutedForeground}
          style={{ marginBottom: 8, textTransform: 'uppercase', fontSize: 12 }}
        >
          Appearance
        </Text>

        <Block
          flex={false}
          color={colors.card}
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            overflow: 'hidden',
          }}
        >
          {APPEARANCE_OPTIONS.map((opt, index) => {
            const selected = mode === opt.value;
            return (
              <TouchableOpacity
                key={opt.value}
                activeOpacity={0.7}
                onPress={() => setMode(opt.value)}
              >
                <Block
                  flex={false}
                  row
                  middle
                  padding={[14, sizes.padding]}
                  style={
                    index > 0
                      ? { borderTopWidth: 1, borderTopColor: colors.border }
                      : undefined
                  }
                  color={selected ? colors.muted : 'transparent'}
                >
                  <Block
                    flex={false}
                    middle
                    center
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 19,
                      backgroundColor: selected
                        ? colors.primary
                        : colors.primaryColors?.lighter,
                      marginRight: 14,
                    }}
                  >
                    <opt.Icon
                      size={20}
                      color={selected ? colors.primaryForeground : colors.primary}
                    />
                  </Block>

                  <Block>
                    <Text bold color={colors.foreground}>
                      {opt.label}
                    </Text>
                    <Text size={12} color={colors.mutedForeground}>
                      {opt.description}
                    </Text>
                  </Block>

                  {selected && (
                    <Block flex={false}>
                      <MdiCheckCircle size={22} color={colors.primary} />
                    </Block>
                  )}
                </Block>
              </TouchableOpacity>
            );
          })}
        </Block>

        <Text
          size={12}
          color={colors.mutedForeground}
          style={{ marginTop: 8, marginLeft: 4 }}
        >
          Light and Dark apply instantly. System follows your device settings.
        </Text>

        {/* Theme (read-only, set by your organization) */}
        <Text
          bold
          color={colors.mutedForeground}
          style={{
            marginTop: 28,
            marginBottom: 8,
            textTransform: 'uppercase',
            fontSize: 12,
          }}
        >
          Theme
        </Text>
        <Block
          flex={false}
          row
          middle
          color={colors.card}
          padding={[14, sizes.padding]}
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Block
            flex={false}
            middle
            center
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: colors.primaryColors?.lighter,
              marginRight: 14,
            }}
          >
            <MdiPalette size={20} color={colors.primary} />
          </Block>
          <Block>
            <Text bold color={colors.foreground}>
              Color theme
            </Text>
            <Text size={12} color={colors.mutedForeground}>
              Set by your organization
            </Text>
          </Block>
          <Block flex={false}>
            <Text bold color={colors.primary}>
              {prettyTheme((colors as any)?.themeName) || 'Brand'}
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default SettingsScreen;
