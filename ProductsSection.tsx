

// 必要なコンポーネント
import { Box, Container, Typography } from "@mui/material";
import { ProductRow, ProductRowProps } from "./ProductRow";
import { productsSectionStyles } from "./ProducsSection.css";

// ProductRowPropsからisEvenとlogoImageを除いた型
type ProductInfo = Omit<ProductRowProps, `isEven` | 'logoImage'>;

// 製品セクションのプロパティ
interface ProductsSectionProps {
    title?: string;
    products: ProductInfo[];
}
// 製品セクションコンポーネント
export const ProductsSection = ({
    title = 'PRODUCTS',
    products
}: ProductsSectionProps) => {
    return(
        <Box component='section' sx={productsSectionStyles.section}>
            <Container>
                {/* シンプル化したセクションの見出し */}
                <Typography
                    variant="h2"
                    align="center"
                    sx={productsSectionStyles.heading}
                    mb={8}
                >
                    {title}
                </Typography>
            </Container>
            {/* 製品リストコンテナ */}
            <Box sx={productsSectionStyles.productsContainer}>
                {/* 各製品に対してproductRowコンポーネントを表示 */}
                {products.map((product, index) => (
                    <ProductRow
                        key={product.id}
                        {...product}
                        isEven={(index % 2) === 1}
                    />
                ))}
            </Box>
        </Box>
    )
}