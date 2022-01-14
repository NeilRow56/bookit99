import Search from '../components/room/Search';
import Layout from '../components/Layout';
import { Container } from '@chakra-ui/react';

export default function SearchPage() {
	return (
		<Layout title="Search Rooms">
			<Container>
				<Search align="center" />
			</Container>
		</Layout>
	);
}
