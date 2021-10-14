import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render Switch.
class App extends React.Component {
    render() {
        return (<table className='size'>
            <tr>
                <td className='lSize'>Checked</td>
                <td>
                    <SwitchComponent checked={true}/>
                </td>
            </tr>
            <tr>
                <td className='lSize'>Unchecked</td>
                <td>
                    <SwitchComponent />
                </td>
            </tr>
        </table>);
    }
}
ReactDom.render(<App />, document.getElementById('switch'));