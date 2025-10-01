# Additional translations features for RHDH

We implement this additional extensions here to move forward with translations.

Our goal is to contribute all missing feature back to Backstage Core or Backstage Community Plugins if they got accepted.

We might deprecate this workspace and plugin in the future when its not needed anymore.

## Pseudo Translation for Development

This plugin supports pseudo translation for testing UI layout and text overflow issues during development.

### How to Enable

1. **Install the plugin** in your Backstage application
2. **Add query parameters** to your URL to enable pseudo translation
3. **Refresh the page** to see the pseudo-translated content

The pseudo translation feature is automatically available when the translations plugin is installed and configured.

### Usage

Add query parameters to your URL to enable pseudo translation:

```bash
# Enable pseudo translation in English
https://your-rhdh-app.com?pseudolocalization=true&lang=en

# Enable pseudo translation in French
https://your-rhdh-app.com?pseudolocalization=true&lang=fr

# Disable pseudo translation (default)
https://your-rhdh-app.com
```

### Query Parameters

| Parameter            | Values            | Default | Description                            |
| -------------------- | ----------------- | ------- | -------------------------------------- |
| `pseudolocalization` | `true`, `false`   | `false` | Enable/disable pseudo translation      |
| `lang`               | Any language code | `en`    | Language to use for pseudo translation |

### Notes

- Pseudo translation is **disabled by default**
- Settings are **not persistent** across page refreshes (query string only)
- Useful for testing UI layout with longer text strings
- Works with any supported language in your Backstage application
