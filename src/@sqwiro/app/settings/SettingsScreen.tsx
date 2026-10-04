import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import {
  MdiWhiteBalanceSunny,
  MdiWeatherNight,
  MdiThemeLightDark,
  MdiCheckCircle,
  MdiPalette,
} from '@expocraft-icons/mdi';
import useAppTheme from '@sqwiro/appcore/theme/useAppTheme';
import { useThemeMode, ThemeModePref } from '@sqwiro/appcore/theme';

import { Box, Row, Screen, ScreenHeader, Stack, Text } from '@expocraft/baseui';

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
    <Screen
      edges={['top']}
      header={<ScreenHeader title="Settings" onBack={() => navigation.goBack()} />}
    >
      <ScrollView
        contentContainerStyle={{ padding: sizes.padding, paddingBottom: 40 }}
      >
        {/* Appearance */}
        <Text
          variant="caption"
          tone="muted"
          weight="bold"
          style={{
            marginBottom: 8,
            textTransform: 'uppercase'
          }}>
          Appearance
        </Text>

        <Box
          className="bg-card"
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
            overflow: 'hidden',
          }}>
          {APPEARANCE_OPTIONS.map((opt, index) => {
            const selected = mode === opt.value;
            return (
              <TouchableOpacity
                key={opt.value}
                activeOpacity={0.7}
                onPress={() => setMode(opt.value)}
              >
                <Row
                  align="center"
                  className={`py-3.5 px-3 ${selected ? 'bg-muted' : 'bg-transparent'}`}
                  style={
                    index > 0
                      ? { borderTopWidth: 1, borderTopColor: colors.border }
                      : undefined
                  }>
                  <Stack
                    align="center"
                    justify="center"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 19,
                      backgroundColor: selected
                        ? colors.primary
                        : colors.primaryColors?.lighter,
                      marginRight: 14,
                    }}>
                    <opt.Icon
                      size={20}
                      color={selected ? colors.primaryForeground : colors.primary}
                    />
                  </Stack>

                  <Stack grow>
                    <Text variant="small" weight="bold">
                      {opt.label}
                    </Text>
                    <Text variant="caption" tone="muted">
                      {opt.description}
                    </Text>
                  </Stack>

                  {selected && (
                    <Box>
                      <MdiCheckCircle size={22} color={colors.primary} />
                    </Box>
                  )}
                </Row>
              </TouchableOpacity>
            );
          })}
        </Box>

        <Text
          variant="caption"
          tone="muted"
          style={{ marginTop: 8, marginLeft: 4 }}
        >
          Light and Dark apply instantly. System follows your device settings.
        </Text>

        {/* Theme (read-only, set by your organization) */}
        <Text
          variant="caption"
          tone="muted"
          weight="bold"
          style={{
            marginTop: 28,
            marginBottom: 8,
            textTransform: 'uppercase'
          }}>
          Theme
        </Text>
        <Row
          align="center"
          className="py-3.5 px-3 bg-card"
          style={{
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.border,
          }}>
          <Stack
            align="center"
            justify="center"
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: colors.primaryColors?.lighter,
              marginRight: 14,
            }}>
            <MdiPalette size={20} color={colors.primary} />
          </Stack>
          <Stack grow>
            <Text variant="small" weight="bold">
              Color theme
            </Text>
            <Text variant="caption" tone="muted">
              Set by your organization
            </Text>
          </Stack>
          <Box>
            <Text variant="small" tone="primary" weight="bold">
              {prettyTheme((colors as any)?.themeName) || 'Brand'}
            </Text>
          </Box>
        </Row>
      </ScrollView>
    </Screen>
  );
};

export default SettingsScreen;
