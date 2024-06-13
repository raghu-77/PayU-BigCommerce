import { Panel, Text, Box, Link} from '@bigcommerce/big-design';
import React from 'react';

// const Index = () => (
//     <Panel margin="xxLarge">
//         <Text>Hello world</Text>
//         <Box marginBottom="xxLarge">
//             <Link href="#">Home</Link>
//         </Box>
//     </Panel>
// );

// export default Index;


export default function index() {
  return (
    <Panel margin="xxLarge">
        <Box marginBottom="xxLarge">
            <Link href="#">Authenticate</Link>
        </Box>
    </Panel>
  )
}
