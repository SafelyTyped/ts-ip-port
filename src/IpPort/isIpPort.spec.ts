//
// Copyright (c) 2020-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
import { expect } from "chai";
import { describe } from "mocha";

import { MAX_IP_PORT, MIN_IP_PORT, isIpPort } from "@safelytyped/ip-port";

describe("isIpPort()", () => {
    describe("with numbers", () => {
        it("accepts integers between " + MIN_IP_PORT + " and " + MAX_IP_PORT + " inclusive", () => {
            for(let i = MIN_IP_PORT; i <= MAX_IP_PORT; i++) {
                const actualValue = isIpPort(i);
                expect(actualValue).to.equal(
                    true,
                    "rejected input value " + JSON.stringify(i)
                );
            }
        });

        it("rejects integers below 0", () => {
            for(let i = MIN_IP_PORT - 100; i < MIN_IP_PORT; i++) {
                const actualValue = isIpPort(i);
                expect(actualValue).to.equal(
                    false,
                    "did not reject input value " + JSON.stringify(i)
                );
            }
        });

        it("rejects integers above 65535", () => {
            for(let i = MAX_IP_PORT + 1; i < MAX_IP_PORT + 100; i++) {
                const actualValue = isIpPort(i);
                expect(actualValue).to.equal(
                    false,
                    "did not reject input value " + JSON.stringify(i)
                );
            }
        });

        it("rejects non-integers", () => {
            const actualValue = isIpPort(
                MIN_IP_PORT + 1.5
            );
            expect(actualValue).to.equal(false);
        });
    });

    describe("with strings", () => {
        it("accepts integers between 0 and 65535 inclusive", () => {
            for(let i = MIN_IP_PORT; i <= MAX_IP_PORT; i++) {
                const inputValue = i.toString();

                const actualValue = isIpPort(inputValue);
                expect(actualValue).to.equal(
                    true,
                    "rejected input value " + JSON.stringify(inputValue)
                );
            }
        });

        it("rejects integers below 0", () => {
            for(let i = MIN_IP_PORT - 100; i < MIN_IP_PORT; i++) {
                const inputValue = i.toString();

                const actualValue = isIpPort(inputValue);
                expect(actualValue).to.equal(
                    false,
                    "did not reject input value " + JSON.stringify(inputValue)
                );
            }
        });

        it("rejects integers above 65535", () => {
            for(let i = MAX_IP_PORT + 1; i < MAX_IP_PORT + 100; i++) {
                const inputValue = i.toString();

                const actualValue = isIpPort(inputValue);
                expect(actualValue).to.equal(
                    false,
                    "did not reject input value " + JSON.stringify(inputValue)
                );
            }
        });

        it("rejects non-integers", () => {
            const actualValue = isIpPort(
                (MIN_IP_PORT + 1.5).toString()
            );
            expect(actualValue).to.equal(false);
        });
    });

    describe("other input types are rejected", () => {
        it("rejects other input types", () => {
            const actualValue = isIpPort(null);
            expect(actualValue).to.equal(false);
        });
    });
});