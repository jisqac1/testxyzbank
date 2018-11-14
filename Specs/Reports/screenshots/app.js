var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003200fd-00f7-000f-006d-00ad00e90040.png",
        "timestamp": 1539697851279,
        "duration": 27030
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00600027-0064-0004-00a5-00c900ef0023.png",
        "timestamp": 1539697886865,
        "duration": 824
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0072004e-00a0-00b7-002d-005a009a006c.png",
        "timestamp": 1539697888580,
        "duration": 194
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fe0015-00c7-00d0-0039-00ea00750036.png",
        "timestamp": 1539697889305,
        "duration": 602
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000e0009-00ac-006c-0038-001e00d00006.png",
        "timestamp": 1539697890445,
        "duration": 130
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001100cd-005a-0023-0073-0024003e00eb.png",
        "timestamp": 1539697891403,
        "duration": 199
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "003d004e-0062-0070-0024-0066000f00c1.png",
        "timestamp": 1539697892282,
        "duration": 813
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0021001c-00f9-00fd-00ec-00f400d90085.png",
        "timestamp": 1539697893490,
        "duration": 118
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ec007e-00cb-0023-0012-003300b20076.png",
        "timestamp": 1539697894233,
        "duration": 250
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ea009d-0055-0065-0049-000a009f0024.png",
        "timestamp": 1539697894835,
        "duration": 140
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0037003a-00cb-00c7-0079-00cf004100de.png",
        "timestamp": 1539697895479,
        "duration": 2696
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009600b3-0018-001e-00e7-00f000ad002e.png",
        "timestamp": 1539697898633,
        "duration": 173
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00170059-00b3-00d0-0018-00b600de007e.png",
        "timestamp": 1539697899451,
        "duration": 216
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0045006c-0036-0099-001f-000f000b007b.png",
        "timestamp": 1539697900194,
        "duration": 87
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002b00c7-0087-001b-00fb-00cb000d001e.png",
        "timestamp": 1539697900697,
        "duration": 111
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004a0065-001c-00ad-00cb-004b007d007d.png",
        "timestamp": 1539697901235,
        "duration": 158
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f100b8-0095-00b1-0032-00fb00fb00ba.png",
        "timestamp": 1539697901709,
        "duration": 1322
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00520054-00b6-009a-006b-006800c9007d.png",
        "timestamp": 1539697903433,
        "duration": 203
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b300e4-0070-0072-0050-003a002d0027.png",
        "timestamp": 1539697904039,
        "duration": 78
    },
    {
        "description": "Open the browser|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006e00be-006e-0050-0073-000600c00071.png",
        "timestamp": 1539697917391,
        "duration": 20134
    },
    {
        "description": "Verify Title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00d500af-009a-0053-00f9-001e006d00ec.png",
        "timestamp": 1539697938011,
        "duration": 1984
    },
    {
        "description": "Color of Customer Login before MouseOver|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00b200f6-00f8-0026-00dd-006700c90017.png",
        "timestamp": 1539697940390,
        "duration": 129
    },
    {
        "description": "click customer login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e300b0-009e-002d-003c-0091001700e2.png",
        "timestamp": 1539697940941,
        "duration": 137
    },
    {
        "description": "Select Customer from Drop Down|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00440009-00ef-0060-0014-0066007600bb.png",
        "timestamp": 1539697941488,
        "duration": 4840
    },
    {
        "description": "Click on Login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009800c0-009b-00da-00f5-0009006e009b.png",
        "timestamp": 1539697946666,
        "duration": 131
    },
    {
        "description": "verify customer title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00400010-00b2-004f-0074-00230090000a.png",
        "timestamp": 1539697947155,
        "duration": 107
    },
    {
        "description": "Click on Deposit Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f00073-0047-00da-0031-0019002300ac.png",
        "timestamp": 1539697947622,
        "duration": 2114
    },
    {
        "description": "Deposit amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00520085-0039-001c-004e-0015000d0080.png",
        "timestamp": 1539697950077,
        "duration": 153
    },
    {
        "description": "Click deposit button after entering amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00da0027-0014-0069-0003-009b000600e5.png",
        "timestamp": 1539697950621,
        "duration": 124
    },
    {
        "description": "Verify Deposit Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00750039-00b9-00f1-0090-005100dc009e.png",
        "timestamp": 1539697951129,
        "duration": 122
    },
    {
        "description": "Amount deposited Value is: |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004d00a8-0040-0044-00a4-000f00130084.png",
        "timestamp": 1539697951619,
        "duration": 74
    },
    {
        "description": "Click on WithDrawl Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e80015-0062-003e-00f7-00f4000200a8.png",
        "timestamp": 1539697952057,
        "duration": 131
    },
    {
        "description": "WithDraw Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004800dc-002c-007b-00d8-0063008d006b.png",
        "timestamp": 1539697952603,
        "duration": 1061
    },
    {
        "description": "Click on WithDrawl Button after Entering Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a60016-00be-0089-00b8-0014005f008b.png",
        "timestamp": 1539697954060,
        "duration": 173
    },
    {
        "description": "Verify Withdraw Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00c5002c-0092-0098-00e6-00de001300b0.png",
        "timestamp": 1539697954610,
        "duration": 109
    },
    {
        "description": "Remaining Balance is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "005b0012-0014-00b9-008a-00b200280030.png",
        "timestamp": 1539697955058,
        "duration": 1061
    },
    {
        "description": "Amount Debited in Transactions page|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a0007a-00d1-00f9-00f5-0021004b00bd.png",
        "timestamp": 1539697956467,
        "duration": 4138
    },
    {
        "description": "Credited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001d00fc-004e-0046-000c-004000c50098.png",
        "timestamp": 1539697960932,
        "duration": 52
    },
    {
        "description": "Debited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006c00f6-00aa-0022-0069-00a5005e00f9.png",
        "timestamp": 1539697961320,
        "duration": 57
    },
    {
        "description": "Click On Logout Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c400c6-0093-00d9-00af-008200d10019.png",
        "timestamp": 1539697961708,
        "duration": 135
    },
    {
        "description": "Click on Home Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7760,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a300ea-007f-00f1-005e-004400fb007f.png",
        "timestamp": 1539697962211,
        "duration": 1648
    },
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008900ce-00dd-0071-00eb-006700da0058.png",
        "timestamp": 1539759009027,
        "duration": 7292
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003700b7-0073-0040-0015-009b00dd00a3.png",
        "timestamp": 1539759020907,
        "duration": 343
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0011003b-0002-003a-000e-0045008f00ba.png",
        "timestamp": 1539759021657,
        "duration": 116
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002c008a-0001-0093-00a1-00f800a50020.png",
        "timestamp": 1539759022172,
        "duration": 143
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001d003a-007b-00af-00d8-008000b8008d.png",
        "timestamp": 1539759023297,
        "duration": 124
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b800f0-001b-000f-00d0-0013009e0027.png",
        "timestamp": 1539759023757,
        "duration": 114
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00b800f1-004f-004a-009a-002d00b600d7.png",
        "timestamp": 1539759024180,
        "duration": 154
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00dc007b-002b-007f-00b5-00400009001e.png",
        "timestamp": 1539759025095,
        "duration": 125
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009800c8-0021-00eb-000d-000a00f50088.png",
        "timestamp": 1539759025608,
        "duration": 123
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000000db-003a-0040-0045-00ce00c40078.png",
        "timestamp": 1539759026071,
        "duration": 118
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d60049-0034-00d2-0049-008c00520030.png",
        "timestamp": 1539759026527,
        "duration": 171
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a7000e-0031-0064-0048-004900120089.png",
        "timestamp": 1539759026974,
        "duration": 166
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "0030004c-00f4-00d2-0069-004f004c0000.png",
        "timestamp": 1539759027444,
        "duration": 123
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003a0051-0057-0070-0017-008700030089.png",
        "timestamp": 1539759027960,
        "duration": 78
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001c00dd-0077-006d-008d-004e002d00fb.png",
        "timestamp": 1539759028598,
        "duration": 144
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001b0012-00ad-0086-000e-00cd001d00bd.png",
        "timestamp": 1539759029071,
        "duration": 172
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b20006-005d-003f-00f5-00dd00ef005e.png",
        "timestamp": 1539759029574,
        "duration": 730
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004f00f9-0010-00ee-00a4-00bb00d00092.png",
        "timestamp": 1539759030670,
        "duration": 172
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8972,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002f00dc-0098-007d-00bf-002e005b0076.png",
        "timestamp": 1539759031268,
        "duration": 74
    },
    {
        "description": "Open the browser|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007e008b-0086-00e4-0095-00dc00eb00e5.png",
        "timestamp": 1539759040941,
        "duration": 5154
    },
    {
        "description": "Verify Title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "0005001b-009c-0046-0059-008f006b004b.png",
        "timestamp": 1539759046500,
        "duration": 88
    },
    {
        "description": "Color of Customer Login before MouseOver|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "001d0009-0087-0022-00d1-006400ff0011.png",
        "timestamp": 1539759046925,
        "duration": 63
    },
    {
        "description": "click customer login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce00a3-00c1-005b-0056-00e400a00063.png",
        "timestamp": 1539759047336,
        "duration": 100
    },
    {
        "description": "Select Customer from Drop Down|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0003007c-000f-005d-009b-00f60089009e.png",
        "timestamp": 1539759048103,
        "duration": 686
    },
    {
        "description": "Click on Login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fd00d0-0051-00d9-00bc-00d6002300be.png",
        "timestamp": 1539759049172,
        "duration": 146
    },
    {
        "description": "verify customer title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "005800e6-0044-00f7-004c-0022002300a1.png",
        "timestamp": 1539759050373,
        "duration": 109
    },
    {
        "description": "Click on Deposit Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00640032-0041-0009-007d-00e500dd0019.png",
        "timestamp": 1539759050903,
        "duration": 2117
    },
    {
        "description": "Deposit amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003a0059-003d-0020-00c9-001a007a00f4.png",
        "timestamp": 1539759053404,
        "duration": 130
    },
    {
        "description": "Click deposit button after entering amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0018003d-0067-00cc-006c-00b400c0009f.png",
        "timestamp": 1539759053957,
        "duration": 109
    },
    {
        "description": "Verify Deposit Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00640079-000b-0040-002c-008f002600ae.png",
        "timestamp": 1539759054407,
        "duration": 112
    },
    {
        "description": "Amount deposited Value is: |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c0007a-00f6-00b2-00e8-00e100e400f1.png",
        "timestamp": 1539759054804,
        "duration": 78
    },
    {
        "description": "Click on WithDrawl Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007300b7-0094-00f5-00e1-00f000ed00d7.png",
        "timestamp": 1539759055222,
        "duration": 126
    },
    {
        "description": "WithDraw Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000900c4-0080-008f-007a-0098006c003e.png",
        "timestamp": 1539759055670,
        "duration": 127
    },
    {
        "description": "Click on WithDrawl Button after Entering Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004000be-0027-0021-00f0-009000fe002f.png",
        "timestamp": 1539759056157,
        "duration": 94
    },
    {
        "description": "Verify Withdraw Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "005600a2-00a0-0026-0057-00b4002600a9.png",
        "timestamp": 1539759056617,
        "duration": 104
    },
    {
        "description": "Remaining Balance is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f800bb-0072-00f0-00fc-002e000100ce.png",
        "timestamp": 1539759057043,
        "duration": 1072
    },
    {
        "description": "Amount Debited in Transactions page|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0040007b-00ac-007c-00e9-00dc00b20055.png",
        "timestamp": 1539759058473,
        "duration": 4146
    },
    {
        "description": "Credited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001b005e-006c-00ea-001b-00b6008100f5.png",
        "timestamp": 1539759062957,
        "duration": 47
    },
    {
        "description": "Debited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003c00a6-0089-0095-0039-0090002c00d1.png",
        "timestamp": 1539759063383,
        "duration": 62
    },
    {
        "description": "Click On Logout Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00230056-0010-003d-00ba-00da00dc0092.png",
        "timestamp": 1539759063788,
        "duration": 111
    },
    {
        "description": "Click on Home Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6360,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00870072-004e-0047-00f7-005c00c500c6.png",
        "timestamp": 1539759064277,
        "duration": 1631
    },
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009f0038-002a-0031-007b-0007008c00cc.png",
        "timestamp": 1539770248729,
        "duration": 8225
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d000af-0028-00d9-001c-008c00f40032.png",
        "timestamp": 1539770262305,
        "duration": 771
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c5000b-00e6-007b-00ab-00a7006f001f.png",
        "timestamp": 1539770263766,
        "duration": 204
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003500b2-001b-0047-0076-009e00fa007e.png",
        "timestamp": 1539770264624,
        "duration": 879
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0035009f-00a6-0070-005e-00d900dd00bb.png",
        "timestamp": 1539770265928,
        "duration": 135
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ef00cb-00f0-008a-0053-00f100e700b5.png",
        "timestamp": 1539770266512,
        "duration": 129
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00c10021-0055-002f-008b-007600180075.png",
        "timestamp": 1539770267039,
        "duration": 409
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006100ef-001a-00ee-0080-00d70003001d.png",
        "timestamp": 1539770268201,
        "duration": 194
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00690076-0061-006b-0012-001300ad00d0.png",
        "timestamp": 1539770269099,
        "duration": 201
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000e0040-0003-00f7-003c-002b007900f7.png",
        "timestamp": 1539770269629,
        "duration": 127
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0035007f-009a-001e-002e-007a000600f0.png",
        "timestamp": 1539770270276,
        "duration": 402
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00920087-00b0-00cf-009d-006500cf0033.png",
        "timestamp": 1539770271082,
        "duration": 202
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "0089006e-00cb-0014-0064-00be008000a5.png",
        "timestamp": 1539770271724,
        "duration": 209
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f00ca-0016-0079-00f6-00e400c90047.png",
        "timestamp": 1539770272358,
        "duration": 103
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006400a4-00ef-0046-00a2-002700650026.png",
        "timestamp": 1539770272860,
        "duration": 170
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0067002c-00d4-000e-0044-00cd002c00ad.png",
        "timestamp": 1539770273540,
        "duration": 155
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ba004e-0017-005c-000b-002a003600f0.png",
        "timestamp": 1539770274877,
        "duration": 1145
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0095003f-0010-0019-0026-00a600a30036.png",
        "timestamp": 1539770276676,
        "duration": 339
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11564,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008000ed-00b5-0051-00a1-0095009d0072.png",
        "timestamp": 1539770277675,
        "duration": 230
    },
    {
        "description": "Open the browser|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://v2.zopim.com/bin/v/widget_v2.267.js 39221 WebSocket connection to 'wss://sg14.zopim.com/s/W/ws/6dnu3GL-ynrbA2K2/c/1539770336597' failed: Error during WebSocket handshake: Unexpected response code: 502",
                "timestamp": 1539770336993,
                "type": ""
            }
        ],
        "screenShotFile": "00db0016-001a-0075-0074-006900720004.png",
        "timestamp": 1539770327132,
        "duration": 9871
    },
    {
        "description": "Verify Title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00f500cf-0061-00a7-00a5-00f900f000bd.png",
        "timestamp": 1539770337770,
        "duration": 539
    },
    {
        "description": "Color of Customer Login before MouseOver|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00b30087-0007-0097-008e-00ac00f500ff.png",
        "timestamp": 1539770338751,
        "duration": 138
    },
    {
        "description": "click customer login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008a0092-0018-00bd-00d1-001800a10053.png",
        "timestamp": 1539770339238,
        "duration": 124
    },
    {
        "description": "Select Customer from Drop Down|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00990068-0099-007b-00af-00c100f70065.png",
        "timestamp": 1539770339820,
        "duration": 665
    },
    {
        "description": "Click on Login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000c00b2-00bd-0060-0065-0083004700fa.png",
        "timestamp": 1539770340936,
        "duration": 196
    },
    {
        "description": "verify customer title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "002200ac-00a5-007f-00be-0087006a00ac.png",
        "timestamp": 1539770341528,
        "duration": 145
    },
    {
        "description": "Click on Deposit Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a00049-00bc-0056-00bc-002e00e9002f.png",
        "timestamp": 1539770342015,
        "duration": 2133
    },
    {
        "description": "Deposit amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b10049-0071-0064-005f-008e00b90030.png",
        "timestamp": 1539770344588,
        "duration": 281
    },
    {
        "description": "Click deposit button after entering amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007f00e4-0087-0005-0012-009900110024.png",
        "timestamp": 1539770345448,
        "duration": 145
    },
    {
        "description": "Verify Deposit Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00450003-0041-00c9-0076-00f5000f0056.png",
        "timestamp": 1539770345953,
        "duration": 125
    },
    {
        "description": "Amount deposited Value is: |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00df00d2-00f0-00f3-004f-00c600ef00dd.png",
        "timestamp": 1539770346498,
        "duration": 116
    },
    {
        "description": "Click on WithDrawl Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00460051-0027-00c3-00da-0077006f008f.png",
        "timestamp": 1539770346975,
        "duration": 177
    },
    {
        "description": "WithDraw Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bb0097-00ba-00f7-008e-00e70055005d.png",
        "timestamp": 1539770347652,
        "duration": 207
    },
    {
        "description": "Click on WithDrawl Button after Entering Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009900d3-00b7-004e-0039-009800a500f0.png",
        "timestamp": 1539770348202,
        "duration": 127
    },
    {
        "description": "Verify Withdraw Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00f4003e-003f-002a-0051-009a000d004e.png",
        "timestamp": 1539770348677,
        "duration": 143
    },
    {
        "description": "Remaining Balance is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ab00b1-00d1-0040-0098-00f8000c0079.png",
        "timestamp": 1539770349317,
        "duration": 1105
    },
    {
        "description": "Amount Debited in Transactions page|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00db0042-0085-00be-00ee-0039006f00be.png",
        "timestamp": 1539770350785,
        "duration": 4122
    },
    {
        "description": "Credited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a80096-0078-009a-00e7-009400210085.png",
        "timestamp": 1539770355258,
        "duration": 67
    },
    {
        "description": "Debited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00390067-00b7-0056-0011-007100db0086.png",
        "timestamp": 1539770356018,
        "duration": 93
    },
    {
        "description": "Click On Logout Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002300f0-00e5-0052-00c5-000900fd0064.png",
        "timestamp": 1539770356455,
        "duration": 147
    },
    {
        "description": "Click on Home Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10512,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c800ab-00cf-00d6-00f4-00bd00d800f3.png",
        "timestamp": 1539770356986,
        "duration": 1635
    },
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00cf000b-0059-00af-00b7-004200af0049.png",
        "timestamp": 1539772585387,
        "duration": 7415
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fc00c7-00b0-00d8-0093-00ef00d20098.png",
        "timestamp": 1539772594400,
        "duration": 350
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fd006c-00cd-006e-0071-00cf0043002e.png",
        "timestamp": 1539772595430,
        "duration": 187
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009c00d3-00de-00f8-00c9-00b600150034.png",
        "timestamp": 1539772596870,
        "duration": 880
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00790093-00c6-002e-007e-002600470058.png",
        "timestamp": 1539772598250,
        "duration": 165
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f8009d-00b2-0028-00fc-004a000100b9.png",
        "timestamp": 1539772598787,
        "duration": 115
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "001700c5-001b-0061-00ee-00dd007e00b5.png",
        "timestamp": 1539772599542,
        "duration": 225
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "005200f4-0009-0056-0037-009e008b005d.png",
        "timestamp": 1539772600842,
        "duration": 283
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c000af-0058-0011-0075-00c900a80048.png",
        "timestamp": 1539772601485,
        "duration": 117
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007500e2-0087-0026-00fd-008300d300bf.png",
        "timestamp": 1539772602042,
        "duration": 145
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c5001c-0071-00da-0093-006e00c800b5.png",
        "timestamp": 1539772602845,
        "duration": 325
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000a00ac-00e6-002a-00c1-00d5008d000d.png",
        "timestamp": 1539772603617,
        "duration": 188
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "003000bf-0041-0068-00a6-0031008d0061.png",
        "timestamp": 1539772604155,
        "duration": 170
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00610071-00e7-00d0-0007-000a00180098.png",
        "timestamp": 1539772604742,
        "duration": 88
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00200033-00b1-005a-00b7-000f006400b3.png",
        "timestamp": 1539772605225,
        "duration": 130
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00940075-00c6-0087-00c4-00db005e0095.png",
        "timestamp": 1539772605732,
        "duration": 110
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006900ce-0030-003f-0096-00bb00e80068.png",
        "timestamp": 1539772606230,
        "duration": 287
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bc0069-0091-0045-00f9-0097006f00da.png",
        "timestamp": 1539772606927,
        "duration": 223
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1248,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f004e-000b-0015-0011-00d8005e00ba.png",
        "timestamp": 1539772607632,
        "duration": 150
    },
    {
        "description": "Open the browser|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ab0008-0057-0066-005a-00cb004b0061.png",
        "timestamp": 1539772613946,
        "duration": 2893
    },
    {
        "description": "Verify Title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "001b006f-005c-0021-00a1-00a80055003c.png",
        "timestamp": 1539772617404,
        "duration": 362
    },
    {
        "description": "Color of Customer Login before MouseOver|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00190073-0048-000a-0092-00d600910027.png",
        "timestamp": 1539772618081,
        "duration": 53
    },
    {
        "description": "click customer login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f70083-0084-0046-00bf-00f20023004d.png",
        "timestamp": 1539772618444,
        "duration": 125
    },
    {
        "description": "Select Customer from Drop Down|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007e00cf-003c-00e3-007f-0016006c009e.png",
        "timestamp": 1539772619006,
        "duration": 723
    },
    {
        "description": "Click on Login button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00cb0030-001e-00d7-005f-003a00c00097.png",
        "timestamp": 1539772620039,
        "duration": 145
    },
    {
        "description": "verify customer title|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00a20099-00d1-0065-003e-00ef00ee002a.png",
        "timestamp": 1539772620629,
        "duration": 127
    },
    {
        "description": "Click on Deposit Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006b00e2-007e-0009-00d1-00ed006a006b.png",
        "timestamp": 1539772621064,
        "duration": 2115
    },
    {
        "description": "Deposit amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00440073-00ce-0077-0073-00eb00d500f2.png",
        "timestamp": 1539772623516,
        "duration": 150
    },
    {
        "description": "Click deposit button after entering amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a40073-000e-0099-00be-00c1008200f9.png",
        "timestamp": 1539772624064,
        "duration": 120
    },
    {
        "description": "Verify Deposit Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "009d0005-00eb-0023-0062-00ab00650056.png",
        "timestamp": 1539772624516,
        "duration": 120
    },
    {
        "description": "Amount deposited Value is: |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ec00a9-005c-0034-005a-0040008500fb.png",
        "timestamp": 1539772624954,
        "duration": 50
    },
    {
        "description": "Click on WithDrawl Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001800dc-0002-00f1-00cf-0038006900c0.png",
        "timestamp": 1539772625439,
        "duration": 162
    },
    {
        "description": "WithDraw Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0021008a-00dc-00f9-0047-00f60048009b.png",
        "timestamp": 1539772625979,
        "duration": 122
    },
    {
        "description": "Click on WithDrawl Button after Entering Amount|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008c00fa-0034-0050-006f-008f000900b9.png",
        "timestamp": 1539772626561,
        "duration": 158
    },
    {
        "description": "Verify Withdraw Amount Message|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00db0088-009c-0063-002b-005c00e70006.png",
        "timestamp": 1539772627074,
        "duration": 107
    },
    {
        "description": "Remaining Balance is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00530069-005c-00cc-00e8-000d008500aa.png",
        "timestamp": 1539772627536,
        "duration": 1038
    },
    {
        "description": "Amount Debited in Transactions page|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fa0038-00a6-007f-00ea-009b00a8006a.png",
        "timestamp": 1539772628924,
        "duration": 4150
    },
    {
        "description": "Credited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00770093-0013-00f1-00a8-00d300a800b4.png",
        "timestamp": 1539772633426,
        "duration": 78
    },
    {
        "description": "Debited Amount is |CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009500be-003c-00d5-00ae-0006001e00d6.png",
        "timestamp": 1539772633831,
        "duration": 50
    },
    {
        "description": "Click On Logout Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a2009d-007f-001d-00dc-00d800c200ae.png",
        "timestamp": 1539772634226,
        "duration": 128
    },
    {
        "description": "Click on Home Button|CUSTOMER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11600,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0064005c-002a-0056-004b-00ab008400b4.png",
        "timestamp": 1539772634824,
        "duration": 1652
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};