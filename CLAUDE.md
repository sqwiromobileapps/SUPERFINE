# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native/Expo mobile application named "SUPERFINE" built with the Sqwiro platform architecture. It's a modular application system that supports dynamic loading of apps organized into different groups (business apps, user apps, custom apps, etc.).

## 📚 Global Documentation & SQWIRO Ecosystem

**IMPORTANT**: This app is part of the broader **SQWIRO multi-tenant SaaS platform**. Always reference the central documentation to understand the ecosystem:

- **[Platform Ecosystem](../SQWIRO/src/@sqwiro/documentation/ECOSYSTEM.md)** - Complete SQWIRO platform overview and multi-tenant architecture
- **[Central Documentation Hub](../SQWIRO/src/@sqwiro/documentation/README.md)** - Main documentation index
- **[Global Styling Guidelines](../SQWIRO/src/@sqwiro/documentation/GLOBAL_STYLING_GUIDELINES.md)** - Universal styling standards
- **[Component Patterns](../SQWIRO/src/@sqwiro/documentation/COMPONENT_PATTERNS.md)** - Reusable architectural patterns
- **[Sections System](../SQWIRO/src/@sqwiro/documentation/sections.md)** - Dynamic content management

> The central documentation (`@sqwiromobile/documentation`) was updated for `@expocraft/baseui` on 5 Oct 2026. For UI
> rules, the `sqwiro-mobile-baseui` skill is the reference.

### SUPERFINE's Position in SQWIRO Ecosystem

**SUPERFINE** operates as a merchant tenant within the SQWIRO platform:

- **Merchant Code**: `superfine` (Superfine Africa Business Solutions)
- **Tenant Isolation**: Complete data separation from other merchants (MANIFESTED, JOHNMARK, etc.)
- **Shared Infrastructure**: Uses common SQWIRO backend, UI libraries, and development patterns
- **African Market Focus**: Specialized for African business markets with localized solutions
- **Regional Customization**: Localized features while maintaining platform consistency

## 🎨 SUPERFINE-Specific Branding

### Brand Configuration - Superfine Africa
- **App Name**: SUPERFINE - African-focused business platform
- **Package**: `com.superfineafrica.cloud` - Android package identifier
- **Bundle ID**: `com.superfineafrica.cloud` - iOS bundle identifier
- **Background Color**: `#FDE3D7` - Warm orange/peach background used in splash and adaptive icon
- **Host**: `admin.localsuperfine.com` - Development packager host

### Regional Focus
Superfine Africa is designed to serve African markets with localized business solutions and services within the SQWIRO platform ecosystem.

## Development Commands

### Starting Development
```bash
npm start                 # Start with beforeStart.js preprocessing
npm run expo:ios         # Run on iOS with preprocessing  
npm run expo:android     # Run on Android with preprocessing
npm run prebuild         # Generate native code with Expo prebuild
```

### Native Development
```bash
npm run ios              # Run on iOS device/simulator
npm run android          # Run on Android device/emulator
npm run web              # Run web version
```

### Building
```bash
npm run build:ios        # Build iOS bundle
cd ios && pod install    # Install iOS dependencies
npx pod-install          # Alternative pod install command
```

## Code Quality
```bash
npx eslint .             # Run ESLint (uses @cloudhub-ux/eslint config)
npx tsc --noEmit        # Run TypeScript type checking
```

## Architecture

### Modular App System
The application uses a modular architecture where individual apps are dynamically loaded based on African market needs and business requirements.

### Key Files
- `src/@sqwiro/app/installedApps.tsx` - Generated file containing app registry with lazy loading
- `app-mapping.js` - Maps app aliases to their local development paths
- `babel.config.js` - Module resolution and icon optimization
- `beforeStart.js` - Preprocessing script that updates IP addresses and cleans project
- `postinstall.js` - Post-installation setup for Android files and versions

### UI library: `@expocraft/baseui`

**Read the `sqwiro-mobile-baseui` skill before any UI work.** Versions, store builds, OTA and Play uploads:
the `sqwiro-mobile-version-and-release` skill.

- **UI comes from `@expocraft/baseui`** (published to GitHub Packages; an exact pin in `package.json`, changes in its CHANGELOG). appcore mounts
  `BaseuiProvider` (`appcore/src/theme/ThemedRoot.tsx`), so screens style with NativeWind `className` and semantic
  tokens (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `border-border`…),
  `<Text variant tone>` and `Box` / `Stack` / `Row` with `gap`. No hex colours, raw `fontSize` or `dark:` variants:
  mode and palette switch by swapping token values. `babel.config.js` and `tailwind.config.js` take their presets
  from `@expocraft/baseui/config/*`.
- **Icons** come from `@expocraft-icons/{mdi,chub,flat-color-icons,noto}` as named imports
  (`import { MdiClose } from '@expocraft-icons/mdi'`).
- **Retired on 5 Oct 2026:** `@expocraft/core`, `@expocraft/rnuilib` and `react-native-paper` are no longer installed
  and their aliases are gone, so importing them breaks the bundle. Old name → clean name: the skill's
  `references/component-map.md`.
- **Clean-only pre-commit guard** (`.git/hooks/pre-commit`): a commit that adds an `@expocraft/baseui/legacy…` import
  is refused. Existing allow-listed imports may stay; a necessary new one needs `// LEGACY-ALLOWED: <reason>` on or
  above the import. Never `--no-verify`. Check the repo with
  `bun ~/@cloudhub/webapps/sqwiro/sqwiroproject/expocraft-baseui/tools/guard/bin/done-check.ts .`
- **Installed apps:** the SQWIRO_SCRIPTS postinstall generates `src/@sqwiro/app/installedApps.tsx` (with
  `app-mapping.js` and the `src/@sqwiro/<category>/<app>` links). For each app it imports `<App>MenuButton` (the file
  name is kept; it renders an `AppTile` launcher) and lazy-loads `<App>App` through `SafeLazy`, allow-listed legacy
  plumbing from `@expocraft/baseui/legacy` that the template emits. Don't edit the generated file by hand.
- **OTA:** `app.json` sets `runtimeVersion: { "policy": "fingerprint" }`. An OTA only reaches binaries with the
  same fingerprint; publish only through `yarn ota:publish`, which runs `../SQWIRO_SCRIPTS/check-fingerprint.js`
  first. Native or dependency changes need a store build. Store releases and OTA publishes need Bernard's explicit
  yes.

### Configuration
- `src/@sqwiro/app/config/config.json` - App configuration (dynamically updated by beforeStart.js)

## Media & Permissions

### Business Documentation
- **Camera Access**: Business document capture, product photography, identity verification
- **Photo Library**: Document uploads, business media management
- **Audio Recording**: Voice memos, customer testimonials, business communications

### Location & Authentication
- **Location Services**: GPS verification for business location authentication
- **Regional Services**: Location-based features for African markets
- **Fraud Prevention**: Location verification for secure business operations

### Contact Integration
- **Contact Access**: Business contact management and customer relationship features
- **Communication Tools**: Easy contact selection for business communications

### Privacy & Compliance
- **African Market Compliance**: Meeting regional privacy and data protection requirements
- **Business Data Security**: Enhanced security for business-critical information
- **Multi-language Support**: Supporting diverse African languages and cultures

## Important Notes

### Development Setup
- Run `beforeStart.js` before starting development - it updates IP addresses and cleans the project
- The project relies on external Sqwiro libraries linked via absolute paths (see babel.config.js aliases)
- Uses custom ESLint configuration from `@cloudhub-ux/eslint`

### App Structure
- Each app module exports `<App>App` (its root) and `<App>MenuButton` (its `AppTile` launcher); the generated
  `installedApps.tsx` wires them (see **UI library** above)
- Navigation handled by `@sqwiro/appcore/navigation/RootNavigator`

## SQWIRO Platform Integration

### Multi-Tenant African Market Data Access
```typescript
// All data automatically scoped to 'superfine' merchant context
const { System_merchantuser, Business_customer, Regional_service } = useGraphql();
const customers = await Business_customer().find({ Region: "AFRICA" }).toJson();

// Backend automatically applies merchant isolation
// Only Superfine Africa business data is accessible
```

### Merchant-Specific Features
- **African Market Solutions**: Specialized business applications for African markets
- **Regional Localization**: Multi-language support and cultural customization
- **Mobile-First Design**: Optimized for diverse African mobile device capabilities
- **Offline Capabilities**: Enhanced offline features for areas with limited connectivity
- **Multi-Currency Support**: African currency and payment systems integration

### Cross-Platform Regional Consistency
- **Shared Components**: Same UI components used across SQWIRO applications, with regional customization
- **Unified APIs**: Single GraphQL endpoint serves all Superfine Africa clients
- **Common Patterns**: Standardized business processes adapted for African markets

### African Market Considerations
- Localization for African languages and cultural preferences
- Mobile-first design for diverse device capabilities across African markets
- Offline-capable features for areas with limited connectivity
- Currency and payment method support for African financial systems

### Build Process
- Version management handled in `postinstall.js` with Android-specific updates
- Uses Expo SDK 51 with React Native 0.74.5
- Custom prebuild process with specific iOS/Android configurations
- Regional permissions and compliance configurations for African markets

## Platform-Specific Notes

### Android
- Package: `com.superfineafrica.cloud`
- Audio and media permissions for business communication and documentation
- Foreground services for reliable business operations

### iOS
- Bundle ID: `com.superfineafrica.cloud`
- Comprehensive privacy descriptions for business applications
- Location-based features for regional business services
- Enhanced security for business-critical applications

### Regional Features
- Support for African time zones and business hours
- Localized currency formats and payment methods
- Cultural considerations for UI/UX design
- Multi-language support for major African languages

---

For shared Sqwiro applications, components, styling guidelines, and architectural patterns, always reference the [central documentation](../SQWIRO/src/@sqwiro/documentation/README.md) to ensure consistency across the platform.
## Spec-Driven Development with Kiro

This mobile app follows Kiro's spec-driven development methodology: **Specifications → Design → Implementation**

### Development Workflow

1. **Specifications Phase**: Write requirements with EARS notation
   - User stories: "As a [role], I want [action], so that [benefit]"
   - Acceptance criteria: "WHEN [trigger] THEN [system SHALL] [action]"
   - Location: `../.kiro/specs/[feature-name]/requirements.md`

2. **Design Phase**: Create technical design
   - React Native component architecture
   - Navigation flow and screen structure
   - Data fetching and offline support
   - Platform-specific considerations (iOS/Android)
   - Testing strategy
   - Location: `../.kiro/specs/[feature-name]/design.md`

3. **Implementation Phase**: Track tasks
   - Hierarchical task breakdown with checkboxes
   - Traceability to requirements
   - Platform testing requirements
   - Location: `../.kiro/specs/[feature-name]/tasks.md`

### .kiro Folder Structure

Uses the shared mobile apps .kiro folder:
```
sqwiro-mobileapps/.kiro/
├── steering/                           # Shared mobile development guidance
│   ├── product.md                     # Mobile apps product overview
│   ├── tech.md                        # React Native/Expo stack
│   ├── structure.md                   # Mobile app structure
│   ├── mobile-development.md          # Mobile-specific patterns
│   ├── expo-patterns.md               # Expo SDK best practices
│   └── cross-platform-patterns.md     # iOS/Android consistency
├── specs/                             # Mobile feature specifications
│   └── templates/                     # Mobile spec templates
│       ├── new-application/
│       └── mobile-feature/
└── workspace.json                     # Kiro workspace configuration
```

### Steering Files

**Foundation Files**:
- `product.md` - Mobile apps purpose, target users, objectives
- `tech.md` - React Native 0.74.5, Expo SDK 51, TypeScript stack
- `structure.md` - Module system, navigation, state management patterns

**Specialized Steering**:
- `mobile-development.md` - React Native component patterns, hooks usage
- `expo-patterns.md` - Expo SDK features, managed workflow, development builds
- `cross-platform-patterns.md` - iOS/Android differences, platform-specific code

### Spec Templates

**Mobile-Specific Templates**:
1. **New Application Template** (`../.kiro/specs/templates/new-application/`)
   - Creating new SQWIRO mobile apps
   - Module registration in installedApps.tsx
   - Navigation setup and screen configuration

2. **Mobile Feature Template** (`../.kiro/specs/templates/mobile-feature/`)
   - Adding features to React Native/Expo apps
   - Component implementation with platform considerations
   - Data fetching and offline support
   - Testing on iOS and Android

### Best Practices

**General**:
- Always create specs for non-trivial features
- Use EARS notation for acceptance criteria
- Define correctness properties for verification
- Maintain traceability: Tasks → Requirements → Properties

**Mobile-Specific**:
- **Platform Testing**: Test on both iOS and Android before marking complete
- **Offline Support**: Consider offline scenarios for all data operations
- **Performance**: Monitor bundle size and app startup time
- **Navigation**: Use React Navigation v6 patterns consistently
- **State Management**: Use @cloudhub-ux/zstore for global state
- **Data Fetching**: Use @cloudhub-ux/graphql hooks with merchant context
- **External Modules**: Run `yarn postinstall` after changes to linked modules
- **IP Configuration**: Run `node beforeStart.js` before development

### Resources

- **Kiro Documentation**: https://kiro.dev/docs/
- **Central Documentation Hub**: `../SQWIRO/src/@sqwiro/documentation/README.md`
- **Shared Specs**: Browse `../.kiro/specs/` for mobile patterns
- **Spec Templates**: Use `../.kiro/specs/templates/` as starting points
- **Steering Files**: Reference `../.kiro/steering/` for mobile guidance
