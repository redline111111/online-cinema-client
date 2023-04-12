import Heading from "../app/components/ui/heading/Heading";
import { Meta } from "../app/utils/meta";

export default function Error500() {
    return (
        <Meta title="Page not found">
            <Heading
                title="500 - Server-side error eccured"
            />
        </Meta>
    )
}