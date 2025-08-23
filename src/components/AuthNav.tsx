import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Link } from "expo-router";

type AuthNavProps = {
    title: string;
    text: string;
    href: string;
    linkContainerStyle?: StyleProp<ViewStyle>;  
    linkStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<ViewStyle>;
}

export default function AuthNav({ title, text, href, linkContainerStyle, linkStyle, textStyle }: AuthNavProps) {
    return (
        <View style={[styles.linkContainer, linkContainerStyle]}>
            <Text style={[styles.linkText, textStyle]}>{title}</Text>
            <Link style={[styles.link, linkStyle]} href={href}>{text}</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    linkContainer: {
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'center',
    },

    linkText: {
        textAlign: 'center',
        fontSize: 16,
    },

    link: {
        textAlign: 'center',
        fontSize: 16,
        color: 'blue',
        fontWeight: '900'
    }
})