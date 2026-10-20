import { products } from '@/lib/mock-products';
import { ProductDetailView } from './product-detail-view';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <ProductDetailView id={id} />;
}
