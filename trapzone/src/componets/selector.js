import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';

class Selector extends React.Component {
    render() {
        let countries = ["AL", "AU", "AT", "BE", "BR", "CM", "CA", "CN", "DK", "EE", "FR", "GA", "DE", "GR", "IS", "ID", "IE", "IT", "JM", "JP", "NL", "NZ", "NG", "NO", "PT", "PR", "ZA", "KR", "ES", "SE", "CH", "TR", "GB", "SD", "SK", "HK", "GH", "PE", "SC", "RU", "KZ", "BY", "IN", "MA", "RO", "CO", "VE", "PL", "FI", "MZ", "TH", "AM", "ML", "PH", "UA", "IL", "CG", "AC"];
        return (
            <ReactFlagsSelect countries={countries}
                searchable={true}
                searchPlaceholder="Search for a country"
            />
        );
    };
}

export default Selector;