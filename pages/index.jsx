import isInitialLoad from "@/utils/middleware/isInitialLoad";
import {
  BlockStack,
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { ExternalIcon } from "@shopify/polaris-icons";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  //DO NOT REMOVE THIS.
  return await isInitialLoad(context);
}

const HomePage = () => {
  const router = useRouter();
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <Page title="Q-Blocks App - Home">
        <Layout>
          {isDev ? (
            <Layout.Section variant="fullWidth">
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Debug Cards
                  </Text>
                  <Text>
                    Explore how the repository handles data fetching from the
                    backend, App Proxy, making GraphQL requests, Billing API and
                    more.
                  </Text>
                  <InlineStack wrap={false} align="end">
                    <Button
                      variant="primary"
                      onClick={() => {
                        router.push("/debug");
                      }}
                    >
                      Debug Cards
                    </Button>
                  </InlineStack>
                </BlockStack>
              </Card>
            </Layout.Section>
          ) : null}
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Welcome to Q-Blocks
                </Text>
                <Text>Your powerful Shopify app for managing blocks and content.</Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push("/blocks");
                    }}
                  >
                    Get Started
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  About Q-Blocks
                </Text>
                <Text>
                  Easily manage and organize your Shopify store content with our intuitive block system.
                </Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push("/settings");
                    }}
                  >
                    Settings
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf" />
        </Layout>
      </Page>
    </>
  );
};

export default HomePage;
